import { Profile } from '../model/profilePayload';
import { HomeActions, HomeActionTypes } from './home.actions';

export interface HomeState{
    profile : Profile;
    error: string;
}
const initState : HomeState = {
    profile : null,
    error : ''

}
export function reducer(state = initState,action : HomeActions) : HomeState{
    switch(action.type){
        case HomeActionTypes.LoadSucces:
            return {
                ...state,
                profile : action.payload
            };
        case HomeActionTypes.LoadFail:
            return {
                ...state,
                error : action.payload
            };
        default :
        return state;
    }
}