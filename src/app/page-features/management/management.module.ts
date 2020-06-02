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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ShareProfileModule } from 'src/app/shared/modules/shareProfileInfo.module';
import { ProfileInfoComponent } from '../home/components/profile-info/profile-info.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { ActionsProfileComponent } from './components/actions-profile/actions-profile.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
const routes : Routes = [
  { path :'',component:ManagementShellComponent},
  { path: 'details/:id',component:ProfileInfoComponent},
  { path: 'actions',component:ActionsProfileComponent}
  // ProfileInfoComponent
]

@NgModule({
  declarations: [ManagementShellComponent, ListProfileComponent, ActionsProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    NzFormModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzPopconfirmModule,
    StoreModule.forFeature(fromManage.manageFeatureKey,fromManage.reducer),
    EffectsModule.forFeature([ManageEffects]),
    ShareProfileModule
  ],
  providers:[{ provide: NZ_ICONS, useValue: icons },ProfileInfoComponent]
})
export class ManagementModule { }
