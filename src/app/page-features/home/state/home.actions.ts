//ngrx action
import { Action } from '@ngrx/store';
import { Profile } from '../model/profilePayload';
export enum HomeActionTypes{
    LoadProfile = "[Home] Load profile",
    LoadSucces = "[Home] Load success",
    LoadFail = "[Home] Load fail",

};

export class LoadProfile implements Action{
    readonly type = HomeActionTypes.LoadProfile;
    constructor(public payload : number){
    }
}
export class LoadSucces implements Action{
    readonly type = HomeActionTypes.LoadSucces;
    constructor(public payload : Profile){}
}
export class LoadFail implements Action{
    readonly type = HomeActionTypes.LoadFail;
    constructor(public payload : string){}
}
export type HomeActions = LoadProfile | LoadSucces | LoadFail;