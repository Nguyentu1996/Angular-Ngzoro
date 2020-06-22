import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as fromManage from '../../../../state/reducers/manage.reducer';
import * as fromManageSelector from "../../../../state/selectors/manage.selector";
import * as fromActions from "../../../../state/actions/manage.actions";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Skill } from 'src/app/page-features/home/model/skillPayload';
import { Department } from '../../models/department';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DepartmentComponent implements OnInit {
  // isDelete = true;
  marked = false;
  isUpdate : boolean = false;
  skills$ : Observable<Skill[]>;
  departments$ : Observable<Department[]>;
  skillName = new FormControl('');
  skill$ : Observable<Skill>;
  formData: FormGroup;
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
    private store : Store<fromManage.ManageState>,
    private fb: FormBuilder,
  )
   { 
    this.store.dispatch(fromActions.LoadSkills());
    this.formData = this.fb.group({
      id:[],
      name :[''],
      isDelete : []
    })
   }

  ngOnInit(): void {
    this.skills$ = this.store.pipe(select(fromManageSelector.selectSkills));
    this.departments$ = this.store.pipe(select(fromManageSelector.selectDepartment));
    this.store.pipe(select(fromManageSelector.selectCurrentSkill)).subscribe(val => {
      if(val){
        this.formData.setValue({
          id : val.id,
          name : val.name,
          isDelete : val.isDelete
        })
      }
    })

  }
  create(){
    this.isUpdate = false;
  
   
  }
  createSkill(){
    console.log("skill name",this.skillName.value);
    debugger;
    let obj = {
      id : 0,
      name : this.skillName.value,
      isDelete : false
      
    }
    this.store.dispatch(fromActions.createSkill({skill:obj}))
  }
  update(id:number){
    this.isUpdate = true;
    // getbyId
    this.store.dispatch(fromActions.getSkillById({id:id}));


  }
  onSubmit(formValue : any){
    console.log("Form Value", formValue);
    this.store.dispatch(fromActions.updateSkill({skill:formValue}));
  }
  toggle(event){
    this.marked = event.target.value;
  }
}
