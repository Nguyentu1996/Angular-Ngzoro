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
export const selectInitCurrentProfile = createSelector(
    selectFeature,
    state => state.currentProfile
);
