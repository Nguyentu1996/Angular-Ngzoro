import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';

export const load = createAction(
  '[Manage Page] Load',

);
export const loadSuccess = createAction(
    '[Manage Page] Load success',
    props<{profiles : Profile[]}>()

);
export const loadFail = createAction(
    '[Manage Page] Load fail',
    props<{err:string}>()
);
export const delele = createAction(
    '[Manage Page] Delete',
    props<{id : number}>()
);
export const deleteSuccess = createAction(
    '[Manage Page] Delete success',
    props<{id : number}>()
);
export const deleteFail = createAction(
    '[Manage Page] Delete fail',
    props<{err : string}>()
);
export const getProfileId = createAction(
    '[Manage Page] Get profile by id',
      props<{id : number}>()
);
export const getProfileFail = createAction(
  '[Manage Page] Init current profile fail',
    props<{err: string}>()
);
export const currentProfile = createAction(
  '[Manage Page] Init current profile',
    props<{profile: Profile}>()
);
export const clearCurrentProfile = createAction(
    '[Manage Page] Clear current profile',
    // props<{profile : null}>()
)
export const create = createAction(
    '[Manage Page] Create profile',
    props<{profile : Profile}>() 
);
export const createSuccess = createAction(
  '[Manage Page] Create success',

);
export const createFail = createAction(
  '[Manage Page] Create Fail' ,
  props<{err:string}>()
);
export const update = createAction(
  '[Manage Page] Update profile',
  props<{profile : Profile}>()
);
export const updateSuccess = createAction(
  '[Manage Page] Update success',
  props<{profile : Profile}>()
);
export const updateFail = createAction (
  '[Manage Page] Update fail',
  props<{err:string}>()
)
