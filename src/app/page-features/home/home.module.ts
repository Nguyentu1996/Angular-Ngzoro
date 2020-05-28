import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './home-shell/home-shell.component';

const routes : Routes = [
 {path:'',component:HomeShellComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [],
    declarations: [ HomeShellComponent],
    providers: [],
})
export class HomeModule { }
