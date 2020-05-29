import * as fromRoot from '../../../state/app-state';
import * as fromHome from './home.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
// Extends the app state to include the Home feature.
// This is required because Home are lazy loaded.
// So the reference to HomeState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State{
    home : fromHome.HomeState
}
// Selector funtions
const getHomeFeaturesState = createFeatureSelector<fromHome.HomeState>('home');
export const getProfile = () =>  createSelector(
    getHomeFeaturesState,
    state => state.profile
    // (state,props) => state.profile[props.id]
    //   (counter, props) => counter * props.multiply
)
export const getError = () => createSelector(
    getHomeFeaturesState,
    state => state.error
)