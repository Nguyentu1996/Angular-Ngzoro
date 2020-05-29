import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementShellComponent } from './management-shell/management-shell.component';
import { Routes, RouterModule } from '@angular/router';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { NzTableModule } from 'ng-zorro-antd/table';

const routes : Routes = [
  { path :'',component:ManagementShellComponent}
]

@NgModule({
  declarations: [ManagementShellComponent, ListProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NzTableModule
  ]
})
export class ManagementModule { }
