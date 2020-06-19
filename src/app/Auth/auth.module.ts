import { NgModule, Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes : Routes = [
{   
    path:'', component:AuthComponent,
    children:[
       {path:'', loadChildren:()=> import("./login/login.module").then(m => m.LoginModule),data:{animation:"LoginPage"}} 
    ]
}
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    exports: [],
    declarations: [AuthComponent],
    providers: [],
})
export class AuthModule { }
