import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/home.reducer';
import { HomeEffect } from './state/home.effect';

const routes : Routes = [
 {path:'',component:HomeShellComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('home',reducer),
        EffectsModule.forFeature([HomeEffect]),
    ],
    exports: [],
    declarations: [ HomeShellComponent],
    providers: [],
})
export class HomeModule { }
