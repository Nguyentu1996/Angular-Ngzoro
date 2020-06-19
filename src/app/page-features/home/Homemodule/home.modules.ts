import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from 'src/app/core/layouts/layout.components';
import { CoreModule } from 'src/app/core/core.module';

const routes : Routes = [
    {
        path: '', component:LayoutComponent ,
        children:[
            { path:'',loadChildren:() => import("../home.module").then(m=>m.HomeModule),data: {animation: 'HomePage'}},
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
export class HomeSModule { }
