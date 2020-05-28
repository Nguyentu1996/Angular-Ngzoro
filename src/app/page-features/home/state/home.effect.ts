import { Injectable } from '@angular/core';
import { Actions,createEffect, ofType } from '@ngrx/effects';
import * as homeActions from './home.actions';
import { HomeService } from '../service/home.service';
import { mergeMap, catchError,map, } from 'rxjs/operators';

import { of } from 'rxjs';
import { LoadProfile } from './home.actions';
@Injectable()
export class HomeEffect {
    constructor(
        private actions$: Actions,
        private _service : HomeService
        ) {}
    loadProfile$ = createEffect(()=>
    this.actions$.pipe(
        // ofType(homeActions.HomeActionTypes.LoadProfile),
        ofType<LoadProfile>(homeActions.HomeActionTypes.LoadProfile),
        mergeMap(action => 
            this._service.getProfile(action.payload).pipe(
                map(data=> (new homeActions.LoadSucces(data))),
                catchError(err => of(new homeActions.LoadFail(err)))
            )
            )
    )
    )
       
}