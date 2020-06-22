import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of, from } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap, delay } from 'rxjs/operators';
import { ManageService } from 'src/app/shared/services/manage.service';
import * as fromManageActions from "../actions/manage.actions";
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Router } from '@angular/router';
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
            delay(250),
            map((data : Profile[]) => fromManageActions.loadSuccess({profiles:data})),
            catchError((err)=> of(fromManageActions.loadFail({err:err.message}))
        ))
    )));

    createProfile$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.create),
        concatMap(action => this._manageService.createUser(action.profile).pipe(
            map((action)=> fromManageActions.createSuccess({profile:action})),
            catchError((err)=> of(fromManageActions.createFail({err:err.message})))
        )),
        tap(() => this.router.navigateByUrl('/manager'))
    )
    );

    updateProfile$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.update),
        concatMap(action => this._manageService.updateUser(action.update.id,action.update.changes).pipe(
            map(action => fromManageActions.updateSuccess({profile:action})),
            catchError((err)=>of(fromManageActions.updateFail({err:err.message}))),
        )),
        tap(()=> this.router.navigateByUrl("/manager"))
    )
    );    

    deleteProfile$ = createEffect(() => this._actions$.pipe(
        ofType(fromManageActions.delele),
        concatMap(action => this._manageService.deleteUser(action.id).pipe(
            map(action => fromManageActions.load()),
            catchError((err)=> of(fromManageActions.deleleFail({err:err.message})))
        )),
        ));

    getProfileById$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.getProfileId),
        concatMap(action => this._manageService.getProfile(action.id)),
        map(data => fromManageActions.currentProfile({profile:data})),
        tap(() => this.router.navigateByUrl('/manager/list-employee/actions')),
    )
    );
    getDepartment$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.LoadDepartment),
        mergeMap(action => this._manageService.getDepartment().pipe(
            map(data => fromManageActions.LoadDepartmentSuccess({department:data}))
        ))
    ));
    filterUser$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.filter),
        mergeMap(action => this._manageService.filterUserByDepartment(action.id).pipe(
            delay(250),
            map(data => fromManageActions.filterResult({profiles:data})),
        ))
    ));
    getListSkill$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.LoadSkills),
        concatMap((action)=> this._manageService.getAllSkill().pipe(
            map(action => fromManageActions.LoadSkillSuccess({skills:action}))
        ))
    ));
    searchUser$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.search),
        mergeMap(action => this._manageService.searchName(action.keywork).pipe(
            delay(250),
            map(data => fromManageActions.searchSuccess({profiles:data}))
        ))
    ));
    pageIndexChange$ = createEffect(() => this._actions$.pipe(
        ofType(fromManageActions.changeIndexPage),
        mergeMap(action => this._manageService.getProfileByIndexChangePanigator(action.page,action.limit).pipe(
            delay(250),
            map(data => fromManageActions.currentPageDataChange({profiles:data}))
        ))
    ) );
    createSkill$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.createSkill),
        concatMap(action => this._manageService.createSkill(action.skill).pipe(
            map(action => fromManageActions.LoadSkills())
        ))
    ));
    getSkill$ = createEffect(()=> this._actions$.pipe(
        ofType(fromManageActions.getSkillById),
        concatMap(action => this._manageService.getSkill(action.id).pipe(
            map(action => fromManageActions.currentSkill({skill:action}))
        ))
    ));
    updateSkill$ = createEffect(() => this._actions$.pipe(
        ofType(fromManageActions.updateSkill),
        concatMap((action) => this._manageService.updateSkill(action.skill).pipe(
            map(action => fromManageActions.LoadSkills())
        ))
    ))
   
}