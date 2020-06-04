import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Profile } from '../../home/model/profilePayload';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromManage from "../../../state/reducers/manage.reducer";
import * as fromSelector from "../../../state/selectors/manage.selector";
import * as fromAction from "../../../state/actions/manage.actions";
@Component({
  selector: 'app-management-shell',
  templateUrl: './management-shell.component.html',
  styleUrls: ['./management-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ManagementShellComponent implements OnInit {
  profile$: Observable<Profile[]> = this.store.pipe(select(fromSelector.selectLoadListProfile));
  data$ : Observable<Profile>;
  constructor(
    private store : Store<fromManage.ManageState>
  ) { 
  }

  ngOnInit(): void {
    this.store.dispatch(fromAction.load());
  }
  deleteProfile(e:number){
    console.log("Dispatch Delete",e);
    this.store.dispatch(fromAction.delele({id:e}));
  }
  setCurrentProfile(e: any){
    console.log("Shell",e);
    this.store.dispatch(fromAction.getProfileId({id:e}));
    this.data$= this.store.pipe(select(fromSelector.selectCurrentProfile));
    this.data$.subscribe(data => console.log("DiffState",data))
  }
  createProfile(e:any){
    this.store.dispatch(fromAction.clearCurrentProfile());
  }
}
