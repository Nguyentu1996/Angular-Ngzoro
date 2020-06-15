import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { Update } from '@ngrx/entity';
import { Department } from 'src/app/page-features/management/models/department';
import { Skill } from 'src/app/page-features/home/model/skillPayload';

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
export const deleleSuccess = createAction(
  '[Manage Page] Delete success' ,
  props<{id : number}>()
);
export const deleleFail = createAction(
  '[Manage Page] Delete fail' ,
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
    props<{profile: any}>()
);
export const clearCurrentProfile = createAction(
    '[Manage Page] Clear current profile',
)
export const create = createAction(
    '[Manage Page] Create profile',
    props<{profile : Profile}>() 
);
export const createSuccess = createAction(
  '[Manage Page] Create success',
  props<{profile : Profile}>() 

);
export const createFail = createAction(
  '[Manage Page] Create Fail' ,
  props<{err:string}>()
);
export const update = createAction(
  '[Manage Page] Update profile',
  props<{update:Update<Profile>}>()
);
export const updateSuccess = createAction(
  '[Manage Page] Update success',
  props<{profile : Profile}>()
);
export const updateFail = createAction (
  '[Manage Page] Update fail',
  props<{err:string}>()
);
export const filter = createAction(
  '[Manage Page] Filter User',
  props<{id : number}>()
);
export const filterResult = createAction(
  '[Manage Page] Filter result',
  props<{profiles : Profile[]}>()
);
export const LoadDepartment = createAction(
  '[Manage Page] Load department'
);
export const LoadDepartmentSuccess = createAction(
  '[Manage Page] Load department success',
  props<{department:Department[]}>()
);
export const LoadSkills = createAction(
  '[Manage Page] Load list skill',
);
export const LoadSkillSuccess = createAction(
  '[Manage Page] Load list skill success',
  props<{skills:Skill[]}>()
);
export const search = createAction(
  '[Manage Page] Search by name',
  props<{keywork:string}>()
);
export const searchSuccess = createAction(
  '[Manage Page] Search result',
  props<{profiles:Profile[]}>()
);
export const changeIndexPage = createAction(
  '[Manage Page] Page change',
  props<{page:number,limit:number}>()
);
export const currentPageDataChange = createAction(
  '[Manage Page] Init current page',
  props<{profiles:Profile[]}>()
);
// export const pageSizeChange = createAction(
//   '[Manage Page] Load profile by pageSizeChange',
//   props<{page:number,limit:number}>()
// )