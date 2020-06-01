import { Action, createReducer, on } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import * as ManageActions from "../actions/manage.actions";
export const manageFeatureKey = 'manage';

export interface ManageState {
    profile: Profile[];
    error: string;
};
export const initState : ManageState  = {
    profile : null,
    error : ''
};
const manageReducer = createReducer(
    initState,
    on(ManageActions.loadSuccess,state => ({...state,profile:state.profile,error:''})),
    on(ManageActions.loadFail,state => ({...state,profile:[],error:state.error}))
);
export function reducer(state:ManageState|undefined,action:Action){
    return manageReducer(state,action)
}