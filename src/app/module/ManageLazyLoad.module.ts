import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ManageLazyLoad } from './ManageLazyLoad.components';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';

const router : Routes = [
    {
        path: '', component:ManageLazyLoad ,
        children:[
            { path:'',loadChildren:() => import("../page-features/management/management.module").then(m=>m.ManagementModule),data: {animation: 'ManagerPage'}},

        ]
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
        CoreModule
    ],
    exports: [],
    declarations: [ManageLazyLoad],
    providers: [],
})
export class ManageLazyLoadModule { }
