import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLazyLoadComponent } from './HomeLazyLoad.component';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../core/layouts/layout.components';
import { CoreModule } from '../core/core.module';
const router : Routes = [
    {
        path: '', component:LayoutComponent ,
        children:[
            { path:'',loadChildren:() => import("../page-features/home/home.module").then(m=>m.HomeModule),data: {animation: 'HomePage'}},
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(router),
    ],
    exports: [],
    declarations: [],
    providers: [LayoutComponent],
})
export class HomeLazyLoadModule { }
