import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layouts/layout.components';

const routes : Routes = [
    {
        path: '', component:LayoutComponent ,
        children:[
            { path:'',loadChildren:() => import("../management.module").then(m=>m.ManagementModule),data: {animation: 'ManagePage'}},
        ]
    }
]
@NgModule({
    imports: [
        CoreModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class ManageModule { }
