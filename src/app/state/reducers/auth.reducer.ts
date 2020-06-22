import { LoginSuccess } from 'src/app/Model/loginSuccessPayload';
import { createReducer, on, Action } from '@ngrx/store';
import * as fromActions from "../actions/auth.action";
export const KeyAuth = "auth";
export interface AuthState  {
    isAuthenticated : boolean;
    auth : LoginSuccess |null;
    error : String|null;
}
export const initState : AuthState  = {
    isAuthenticated : false,
    auth : null,
    error : null,
}
const authReducer = createReducer(
    initState,
    on(fromActions.loginSuccess,(state,action)=>({
        ...state,
        isAuthenticated : true,
        auth : action.auth
    })),
    on(fromActions.loginFail,(state,action)=>({
        ...state,
        isAuthenticated : false,
        error : action.error
    })),
    on(fromActions.logout,(state,action)=>({
        ...state,
        isAuthenticated : false
    }))
);
export function reducer(state:AuthState | undefined,action:Action){
    return authReducer(state,action);
};