import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from "../app-state";
import * as fromManage from "../reducers/manage.reducer";
import { selectAllUsers } from '../reducers/manage.reducer';

export interface State extends fromRoot.AppState{
    manage : fromManage.ManageState
}
export const selectFeature = createFeatureSelector<fromManage.ManageState>(fromManage.manageFeatureKey);

export const selectLoadListProfile = createSelector(
    selectFeature,
    selectAllUsers
);
export const selectCurrentProfile = createSelector(
    selectFeature,
    state => state.currentProfile
);
export const selectDepartment = createSelector(
    selectFeature,
    state => state.department
);
export const selectSkills = createSelector(
    selectFeature,
    state => state.skills
);
export const selectCurrentPageData = createSelector(
    selectFeature,
    state => state.currentPage
);
export const selectPageSize = createSelector(
    selectFeature,
    state => state.pageSize
);
export const selectCurrentSkill = createSelector(
    selectFeature,
    state => state.currentSkill
)
// export const selectCurrentProfileIdDelete = createSelector(
//     selectFeature,
//     state => state.idDelete
// );
// export const selectProfilesAfterDelete = createSelector(
//     selectFeature,
//     (state,idDelete) =>{
//         if(idDelete){
//              state.profiles.filter(p => p.id !== idDelete);
//         }else{
//             return state.profiles
//         }
//     }
// )