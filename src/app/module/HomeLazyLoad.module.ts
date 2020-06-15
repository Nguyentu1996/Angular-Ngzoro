import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLazyLoadComponent } from './HomeLazyLoad.component';
import { CommonModule } from '@angular/common';
const router : Routes = [
    {
        path: '', component:HomeLazyLoadComponent ,
        children:[
            { path:'',loadChildren:() => import("../page-features/home/home.module").then(m=>m.HomeModule),data: {animation: 'HomePage'}},
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(router),
    ],
    exports: [],
    declarations: [HomeLazyLoadComponent],
    providers: [],
})
export class HomeLazyLoadModule { }
