import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementShellComponent } from './management-shell/management-shell.component';
import { Routes, RouterModule } from '@angular/router';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { EffectsModule } from '@ngrx/effects';
import { ManageEffects } from 'src/app/state/effects/manage.effect';
import * as fromManage from "../../state/reducers/manage.reducer";
import { StoreModule } from '@ngrx/store';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const routes : Routes = [
  { path :'',component:ManagementShellComponent}
]

@NgModule({
  declarations: [ManagementShellComponent, ListProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule,
    NzDividerModule,
    StoreModule.forFeature(fromManage.manageFeatureKey,fromManage.reducer),
    EffectsModule.forFeature([ManageEffects]),
  ]
})
export class ManagementModule { }
