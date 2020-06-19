import { createAction, props } from '@ngrx/store';
import { Login } from 'src/app/Model/loginPayload';
import { LoginSuccess } from 'src/app/Model/loginSuccessPayload';

export const login = createAction(
    "[Auth Page] Login",
    props<{login : Login}>()
);
export const loginSuccess = createAction(
    "[Auth Page] Login success",
    props<{auth : LoginSuccess}>()
);
export const loginFail = createAction(
    "[Auth Page] Login fail",
    props<{error : String}>()
)