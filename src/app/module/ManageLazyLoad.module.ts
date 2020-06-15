import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { ManageLazyLoad } from './ManageLazyLoad.components';
import { CommonModule } from '@angular/common';

const router : Routes = [
    {
        path: '', component:ManageLazyLoad ,
        children:[
            { path:'',loadChildren:() => import("../page-features/management/management.module").then(m=>m.ManagementModule),data: {animation: 'HomePage'}},

        ]
    }
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ],
    exports: [],
    declarations: [ManageLazyLoad],
    providers: [],
})
export class ManageLazyLoadModule { }
