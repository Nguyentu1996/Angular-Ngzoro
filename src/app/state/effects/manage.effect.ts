import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ManageService } from 'src/app/shared/services/manage.service';
import * as fromManageActions from "../actions/manage.actions";
import { Profile } from 'src/app/page-features/home/model/profilePayload';
@Injectable()
export class ManageEffects{
    constructor(
        private _actions$ : Actions,
        private _manageService : ManageService
    ){}
    loadProfile$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.load),
        mergeMap(action=> this._manageService.getAllUser().pipe(
            map((data : Profile[]) => fromManageActions.loadSuccess({profile:data})),
            catchError((err)=> of(fromManageActions.loadFail({err:err.message}))
        ))
    )));
}