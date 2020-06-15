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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { PanigatorComponent } from './components/panigator/panigator.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { PanigatorModule } from './components/panigator/panigator.module';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
const routes : Routes = [
  { path :'',component:ManagementShellComponent,data: {animation: 'ManagePage'}},
  { path: 'details/:id',component:ProfileInfoComponent,data: {animation: 'ProfilePage'}},
  { path: 'actions',component:ActionsProfileComponent,data: {animation: 'ActionsPage'}}
 
  // ProfileInfoComponent
]

@NgModule({
  declarations: [ManagementShellComponent, ListProfileComponent, ActionsProfileComponent,  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    PanigatorModule,
    NzFormModule,
    NzUploadModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    NzIconModule,
    NzSelectModule,
    NzGridModule,
    NzPopconfirmModule,
    NzSpinModule,
    NzAlertModule,
    NzDatePickerModule,
    StoreModule.forFeature(fromManage.manageFeatureKey,fromManage.reducer),
    EffectsModule.forFeature([ManageEffects]),
    ShareProfileModule
  ],
  providers:[{ provide: NZ_ICONS, useValue: icons },ProfileInfoComponent,PanigatorComponent]
})
export class ManagementModule { }
