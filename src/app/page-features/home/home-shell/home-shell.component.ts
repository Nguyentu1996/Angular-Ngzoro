import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromHome from '../../home/state/home.selector';
import * as homeActions from '../../home/state/home.actions';
import { Observable } from 'rxjs';
import { Profile } from '../model/profilePayload';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrls: ['./home-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeShellComponent implements OnInit {

  profile$ : Observable<Profile>;
  constructor(
    private _store : Store<fromHome.State>
  ) { }

  ngOnInit(): void {
    this._store.dispatch(new homeActions.LoadProfile(1));
    this.profile$ = this._store.pipe(select(fromHome.getProfile()));
    this.profile$.pipe(filter(v => v ! == undefined && null));

  }
  

}
