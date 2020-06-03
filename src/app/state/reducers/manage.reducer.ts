import { Action, createReducer, on } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import * as ManageActions from "../actions/manage.actions";
export const manageFeatureKey = 'manage';

export interface ManageState {
    profiles: Profile[];
    error: string;
    currentProfile : Profile;
};
export const initState : ManageState  = {
    profiles : null,
    error : '',
    currentProfile: null,
};
const manageReducer = createReducer(
    initState,
    on(ManageActions.loadSuccess, (state,action)=> ({
        ...state,
        profiles:action.profiles,
      
    })),
    on(ManageActions.loadFail,(state,action) => ({
        ...state,
        error:action.err,
    })),
    on(ManageActions.createSuccess,(state,action)=>({    
        ...state,
    })),
    on(ManageActions.updateSuccess,(state,action)=>({
        ...state,
        // profiles : [...state.profiles.map(item => action.profile.id === item.id ? action.profile : item)]
    })),
    on(ManageActions.deleteSuccess,(state,action)=>({
        ...state,
        profiles : [...state.profiles.filter(val => val.id != action.id)]
    })),
    on(ManageActions.currentProfile,(state,action)=>({
        ...state,
        currentProfile: action.profile
    })),
    on(ManageActions.clearCurrentProfile,(state,action)=>({
        ...state,
        currentProfile:null
    }))
);
export function reducer(state:ManageState|undefined,action:Action){
    return manageReducer(state,action)
}