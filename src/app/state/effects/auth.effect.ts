import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable ,Inject} from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import * as fromAuthActions from "../actions/auth.action";
import { LoginSuccess } from 'src/app/Model/loginSuccessPayload';
import { EMPTY, of, from } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap, delay } from 'rxjs/operators';
const STORAGE_KEY = 'token';

@Injectable()
export class AuthEffect{
    constructor(
        private _actions$ : Actions,
        private _router: Router,
        private _authService : AuthService,
        @Inject(SESSION_STORAGE) private storage: StorageService
    ){}
    login$ = createEffect(()=> this._actions$.pipe(
        ofType(fromAuthActions.login),
        mergeMap(action=> this._authService.login(action.login).pipe(
            map((auth : LoginSuccess) => fromAuthActions.loginSuccess({auth:auth})),
            tap((auth)=>{
                this.storage.set(STORAGE_KEY,auth.auth.jwtToken);
                this._router.navigateByUrl('/home');
            }),
            catchError((err)=> of(fromAuthActions.loginFail({error:err.message}))
        ))
    )));
    logout = createEffect(()=> this._actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(()=>{
            this.storage.remove(STORAGE_KEY);
            this._router.navigateByUrl("/auth");
        })
    ))
}