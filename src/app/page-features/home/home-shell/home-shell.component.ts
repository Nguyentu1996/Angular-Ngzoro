import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromHome from '../state/home.selector';
import { Observable } from 'rxjs';
import { Profile } from '../model/profilePayload';
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
    this.profile$ = this._store.pipe(select(fromHome.getProfile));
    this.profile$.subscribe(data => console.log("Data",data));
  }

}
