import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Profile } from '../../home/model/profilePayload';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromManage from "../../../state/reducers/manage.reducer";
import * as fromSelector from "../../../state/selectors/manage.selector";
import * as fromAction from "../../../state/actions/manage.actions";
import { Department } from '../models/department';
import { SubjectService } from '../../home/service/data-subject';
@Component({
  selector: 'app-management-shell',
  templateUrl: './management-shell.component.html',
  styleUrls: ['./management-shell.component.css'],
 
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ManagementShellComponent implements OnInit {
  profile$: Observable<Profile[]>;
  department$ : Observable<Department[]>;
  pageSize : number;
  pageIndex : number;
  constructor(
    private store : Store<fromManage.ManageState>,
    private cd : ChangeDetectorRef,
    private _subjectService : SubjectService
  ) { 
      let obj = {
        page :"Manager",
        pageChild:""
      };
      this._subjectService.breadcrumb$.next(obj);
      this.store.dispatch(fromAction.load());
      this.store.dispatch(fromAction.LoadDepartment());
      this.store.dispatch(fromAction.LoadSkills());
  }

  ngOnInit(): void {
    this.profile$ = this.store.pipe(select(fromSelector.selectLoadListProfile));
    this.department$ = this.store.pipe(select(fromSelector.selectDepartment));
    this.store.pipe(select(fromSelector.selectPageSize)).subscribe(page => {
      if(page){
        this.pageSize = page;
      }
    })
  }
  deleteProfile(e:number){
    console.log("Dispatch Delete",e);
    this.store.dispatch(fromAction.delele({id:e}));
  }
  setCurrentProfile(e: any){
    console.log("Shell",e);
    this.store.dispatch(fromAction.getProfileId({id:e}));
  }
  createProfile(e:any){ 
    this.store.dispatch(fromAction.clearCurrentProfile());
  }
  filterProfile(e:number){
    this.store.dispatch(fromAction.filter({id:e}));
  }
  getAll(e:any){
    this.store.dispatch(fromAction.load());
  }
  searchName(e:any){
    this.store.dispatch(fromAction.search({keywork:e}));
  }
  pageIndexChange(obj : any){
    this.store.dispatch(fromAction.changeIndexPage({page:obj.page,limit:obj.limit}));
    
  }
}
