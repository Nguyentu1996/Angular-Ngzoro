import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeShellComponent } from './home-shell/home-shell.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/home.reducer';
import { HomeEffect } from './state/home.effect';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
// ant module
// import { NzCardModule } from 'ng-zorro-antd/card';
// import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
// import { NzAvatarModule } from 'ng-zorro-antd/avatar';
// import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzBadgeModule } from 'ng-zorro-antd/badge';


const routes : Routes = [
 {path:'',component:HomeShellComponent}
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('home',reducer),
        EffectsModule.forFeature([HomeEffect]),
        NzDescriptionsModule,
        NzBadgeModule
    ],
    exports: [],
    declarations: [ HomeShellComponent,ProfileInfoComponent],
    providers: [],
})
export class HomeModule { }