import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromHome from '../../home/state/home.selector';
import * as homeActions from '../../home/state/home.actions';
import { Observable } from 'rxjs';
import { Profile } from '../model/profilePayload';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-shell',
  templateUrl: './home-shell.component.html',
  styleUrls: ['./home-shell.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeShellComponent implements OnInit {

  profile$ : Observable<Profile>;
  constructor(
    private _store : Store<fromHome.State>,
    private router :ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.router.snapshot.params.id
    // remember get localstorage 
    this._store.dispatch(new homeActions.LoadProfile(1));
    this.profile$ = this._store.pipe(select(fromHome.getProfile()));  
  }
  

}
