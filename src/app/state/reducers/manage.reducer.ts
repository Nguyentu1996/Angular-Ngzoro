import { Action, createReducer, on } from '@ngrx/store';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import * as ManageActions from "../actions/manage.actions";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Department } from 'src/app/page-features/management/models/department';
import { Skill } from 'src/app/page-features/home/model/skillPayload';

export const manageFeatureKey = 'manage';

export interface ManageState extends EntityState<Profile> {
    profiles: Profile[];
    error: string;
    currentProfile : Profile | null;
    department : Department[] ;
    skills : Skill[];
    currentPage : Profile[];
    pageSize : number;
};
export const adapter: EntityAdapter<Profile> = createEntityAdapter<Profile>();

export const initState : ManageState  = adapter.getInitialState({ 
    profiles : [],
    error : '',
    currentProfile: null,
    department : [],
    skills:[],
    currentPage : [],
    pageSize : 0
}); 

const manageReducer = createReducer(
    initState,
    on(ManageActions.loadSuccess, (state,action)=> {
       return adapter.setAll(action.profiles,state);
    }),
    on(ManageActions.loadFail,(state,action) => ({
        ...state,
        error:action.err,
    })),
    on(ManageActions.currentProfile,(state,action)=>({
        ...state,
        currentProfile: action.profile
    })),
    on(ManageActions.createSuccess,(state,action)=>{    
      return adapter.addOne(action.profile,state);
    }),
    on(ManageActions.update,(state,action)=>{
      return adapter.updateOne(action.update,state);
    //   tốt hơn nên response về data mới add
    }),
    on(ManageActions.delele,(state,action) =>{
      return adapter.removeOne(action.id,state); 
    }),
    
    on(ManageActions.clearCurrentProfile,(state,action)=>({
        ...state,
        currentProfile:null
    })),
    on(ManageActions.LoadDepartmentSuccess,(state,action)=>{
        return {
        ...state,
        department: action.department
        }
    }),
    on(ManageActions.filterResult,(state,action)=>{
        return adapter.setAll(action.profiles,state);
    }),
    on(ManageActions.LoadSkillSuccess,(state,action)=>{
        return {
            ...state,
            skills:action.skills
        }
    }),
    on(ManageActions.searchSuccess,(state,action)=>{
        return adapter.setAll(action.profiles,state)
    }),
    on(ManageActions.currentPageDataChange,(state,action)=>{
        return adapter.setAll(action.profiles,state)
    }),
    on(ManageActions.changeIndexPage,(state,action)=>{
        return {
            ...state,
            pageSize : action.limit
        }
    })
);
export function reducer(state:ManageState|undefined,action:Action){
    return manageReducer(state,action)
}
// get the selectors
const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();
  // select the array of users

  export const selectAllUsers = selectAll;
  export const selectEntit = selectEntities;
