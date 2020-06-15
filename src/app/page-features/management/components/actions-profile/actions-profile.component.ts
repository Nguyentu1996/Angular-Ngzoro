import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef ,HostListener} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UploadFile } from 'ng-zorro-antd/upload';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

import { Store, select } from '@ngrx/store';
import * as fromManage from "../../../../state/reducers/manage.reducer";
import * as fromSelector from "../../../../state/selectors/manage.selector";
import * as fromActions from "../../../../state/actions/manage.actions";
import { GenericValidator } from 'src/app/shared/validator/generic-validator';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Update } from '@ngrx/entity';
import { Department } from '../../models/department';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import { Skill } from 'src/app/page-features/home/model/skillPayload';
@Component({
  selector: 'app-actions-profile',
  templateUrl: './actions-profile.component.html',
  styleUrls: ['./actions-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsProfileComponent implements OnInit {
  validateForm: FormGroup;

  checkCreateSkill:boolean = true;
  loading = false;
  isEnglish = false;
  showStatus = false;

  avatarUrl?: string;
  displayMessage: { [key: string]: string } = {};
  profile : Profile = null;
  departments : Department[];
  department: any;
  skills : any[] = [];

  departments$ : Observable<Department[]>;
  skills$ : Observable<Skill[]>;

  private genericValidator: GenericValidator;
  private validationMessages: { [key: string]: { [key: string]: string } };
  options = [
    {
      value : false,
      name : 'Active'
    },
    {
      value : true,
      name : 'Delete'
    }
  ];
 
  constructor(
    private cd : ChangeDetectorRef,
    private store: Store<fromManage.ManageState>,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private i18n: NzI18nService

  ) {
   
    this. departments$ = this.store.pipe(select(fromSelector.selectDepartment));
    this.skills$ = this.store.pipe(select(fromSelector.selectSkills));

    this.validationMessages = {
      name: {
        required: 'Name is required.',
        minlength: 'Name must be at least two characters.',
        maxlength: 'Name cannot exceed 20 characters.'
      },
      surName:{
        required: 'Name is required.',
        minlength: 'Name must be at least two characters.',
        maxlength: 'Name cannot exceed 20 characters.'
      },
      phoneNumber: {
        required: 'Phone Number is required.',
        pattern: 'Phone Number is not valid'
      },
      address: {
        required: 'Address is required.',
        minlength: 'Address must be at least 8 characters.',
        maxlength: 'Address cannot exceed 20 characters.'
      },
      email:{
        required: 'Email is required.',
        email: 'Email is not valid'
      },
      readmine:{
        required: 'Readmine is required.',
        minlength: 'Readmine must be at least two characters.',
        maxlength: 'Readmine cannot exceed 20 characters.'
      },
      status:{
        required: 'Status is required.',

      },
      department:{
        required: ' department is required.'
      }
    };
    this.genericValidator = new GenericValidator(this.validationMessages);
    this.validateForm = this.fb.group({
      name: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
      surName: ['',[Validators.required,Validators.maxLength(20),Validators.minLength(2)]],
      phoneNumber: ['',[Validators.required,Validators.pattern('')]],
      address: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      email: ['',[Validators.required,Validators.email]],
      readmine: ['',[Validators.required,Validators.maxLength(15),Validators.minLength(3)]],
      status :[''],
      department:['',[Validators.required]],
      skills:[],
      dob:['']
    });

  }
  beforeUpload = (file: UploadFile, _fileList: UploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };
  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    console.log("IMG",img);
    
    reader.readAsDataURL(img);
  };
  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
          console.log("AVT",this.avatarUrl);
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }
  ngOnInit(): void {
    
    this.store.pipe(select(fromSelector.selectCurrentProfile)).subscribe(data => {
      // this.cd.
      if (data) {
        // this.cd.markForCheck();
        this.checkCreateSkill = false;
        this.showStatus = true;
        this.profile = data;
        this.department = data.department
        this.validateForm.patchValue({
          name : data.name,
          surName : data.surName,
          phoneNumber : data.phoneNumber,
          address : data.address,
          email : data.email,
          readmine : data.readmine,
          status : data.status ,
          department : data.department,
          skills:data.skills
        });

      }
    });
    this.validateForm.valueChanges.subscribe(
      value => {
        this.displayMessage = this.genericValidator.processorMessage(this.validateForm);
      } 
    );
  }
  submitForm(value: any) {
    console.log("Submit",value);    
    if(this.avatarUrl){
      value.image = this.avatarUrl;
    };
     
    if(this.showStatus){
      value.id = this.profile.id;
      const update: Update<Profile> = {
        id: value.id,
        changes: {
          ...value,
        }
      }
      this.store.dispatch(fromActions.update({update}));

    }else{
      this.store.dispatch(fromActions.create({profile:value}));
    }
    
  } 
  compareFn(a, b) {
    return a && b && a.id == b.id;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  
}
