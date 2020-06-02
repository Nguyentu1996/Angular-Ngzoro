import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import * as fromManage from "../../../../state/reducers/manage.reducer";
import * as fromSelector from "../../../../state/selectors/manage.selector";
import { Profile } from 'src/app/page-features/home/model/profilePayload';
@Component({
  selector: 'app-actions-profile',
  templateUrl: './actions-profile.component.html',
  styleUrls: ['./actions-profile.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ActionsProfileComponent implements OnInit {
  profile : Profile;
  validateForm: FormGroup;

  constructor(
    private store : Store<fromManage.ManageState>,
    private fb: FormBuilder

  ) {
    this.validateForm = this.fb.group({
      userName :[],
      mobile:[],
      address:[],
      email :[]
    })
   }

  ngOnInit(): void {
    this.store.pipe(select(fromSelector.selectInitCurrentProfile)).subscribe(data=>{
      if(data){
        this.profile = data;
      }
    });
  }
  submitForm(value: any){

  }
}
