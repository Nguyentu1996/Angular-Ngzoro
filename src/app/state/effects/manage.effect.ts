import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { ManageService } from 'src/app/shared/services/manage.service';
import * as fromManageActions from "../actions/manage.actions";
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Router } from '@angular/router';
import { dispatch } from 'rxjs/internal/observable/pairs';
@Injectable()
export class ManageEffects{
    constructor(
        private _actions$ : Actions,
        private _manageService : ManageService,
        private router: Router
    ){}
    loadProfile$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.load),
        mergeMap(action=> this._manageService.getAllUser().pipe(
            map((data : Profile[]) => fromManageActions.loadSuccess({profiles:data})),
            catchError((err)=> of(fromManageActions.loadFail({err:err.message}))
        ))
    )));
    createProfile = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.create),
        concatMap(action => this._manageService.createUser(action.profile).pipe(
            tap(()=> console.log("Effect",action.profile)),
            map(()=> fromManageActions.createSuccess()),
            catchError((err) => of(fromManageActions.createFail({err:err.message})))
        )),
        tap(() => this.router.navigateByUrl('/manager'))
    ),
    {dispatch:false}
    );
    updateProfile = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.update),
        mergeMap(action => this._manageService.updateUser(action.profile).pipe(
            map((data)=> fromManageActions.updateSuccess({profile:data})),
            catchError((err) => of(fromManageActions.updateFail({err:err.message})))
        )),
        tap(() => this.router.navigateByUrl('/manager'))
    ),
    {dispatch:false}
    );    
    deleteProfile = createEffect(() => this._actions$.pipe(
        ofType(fromManageActions.delele),
        mergeMap(action => this._manageService.deleteUser(action.id).pipe(
            map((data)=> fromManageActions.deleteSuccess({id:data.id})),
            catchError((err) => of(fromManageActions.deleteFail({err:err.message})))
        )),
        // tap(() => this.router.navigateByUrl('/manager')),
    ),
    {dispatch:false}
    );
    getProfileById = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.getProfileId),
        mergeMap(action => this._manageService.getProfile(action.id).pipe(
            tap((data) => console.log("EffectProfile",data)),
            map((data) => fromManageActions.currentProfile({profile : data})),
            catchError((err) => of(fromManageActions.getProfileFail({err:err.message})))
        )),
        tap(() => this.router.navigateByUrl('/manager/actions')),
    ),
    {dispatch:false}
    );
    clearCurrentProfile = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.clearCurrentProfile),
        tap(() => this.router.navigateByUrl('/manager/actions'))
    ),
    {dispatch:false}
    );
}