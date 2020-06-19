import * as fromRoot from "../app-state";
import * as fromAuth from "../reducers/auth.reducer";
import { createFeatureSelector, createSelector } from '@ngrx/store';
export interface State extends fromRoot.AppState{
    auth : fromAuth.AuthState
};
export const selectFeature = createFeatureSelector<fromAuth.AuthState>(fromAuth.KeyAuth);
export const selectIsAuth = createSelector(
    selectFeature,
    state => state.isAuthenticated
);