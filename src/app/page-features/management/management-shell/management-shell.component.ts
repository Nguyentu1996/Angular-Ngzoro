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
  profile$: Observable<Profile[]> = this.store.pipe(select(fromSelector.selectLoadListProfile));;

  constructor(
    private store : Store<fromManage.ManageState>
  ) { 
  }

  ngOnInit(): void {
    this.store.dispatch(fromAction.load());
    this.profile$.subscribe(data=>console.log("Data",data));

  }

}
