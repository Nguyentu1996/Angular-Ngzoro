import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';

export const load = createAction(
  '[Manage Page] Load',
  // props<{profile : Profile[]}>()

);
export const loadSuccess = createAction(
    '[Manage Page] Load success',
    props<{profile : Profile[]}>()

);
export const loadFail = createAction(
    '[Manage Page] Load fail',
    props<{err:string}>()
);
