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

import { ShareProfileModule } from 'src/app/shared/modules/shareProfileInfo.module';
import { HomeComponent } from './Homemodule/home.components';
import { NzIconsModule } from 'src/app/nz-icon.module';
import { CoreModule } from 'src/app/core/core.module';
import { AntdModule } from 'src/app/ng-zoro-antd.module';


const routes : Routes = [
    {path:'',component:HomeComponent, data:{animation :"HomeLazy"},
        children:[
            {path: '',component:HomeShellComponent,data: {animation: 'HomePage'}}
        ]},
]

@NgModule({
    imports: [
        CommonModule,
        // NzIconsModule,
        AntdModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('home',reducer),
        EffectsModule.forFeature([HomeEffect]),
        ShareProfileModule
    ],
    exports: [],
    declarations: [ HomeShellComponent,HomeComponent],
    providers: [ProfileInfoComponent],
})
export class HomeModule { }
