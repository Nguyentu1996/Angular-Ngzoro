import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import * as fromRoot from "../app-state";
import * as fromManage from "../reducers/manage.reducer";
import { state } from '@angular/animations';
export interface State extends fromRoot.AppState{
    manage : fromManage.ManageState
}
export const selectFeature = createFeatureSelector<fromManage.ManageState>(fromManage.manageFeatureKey);

export const selectLoadListProfile = createSelector(
    selectFeature,
    state => state.profiles,
);
export const selectCurrentProfile = createSelector(
    selectFeature,
    state => state.currentProfile
);
// export const selectCurrentProfileIdDelete = createSelector(
//     selectFeature,
//     state => state.idDelete
// );
// export const selectProfilesAfterDelete = createSelector(
//     selectFeature,
//     selectCurrentProfileIdDelete,
//     (state,idDelete) =>{
//         if(idDelete){
//              state.profiles.filter(p => p.id !== idDelete);
//         }else{
//             return state.profiles
//         }
//     }
// )