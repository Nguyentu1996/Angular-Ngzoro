import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import * as fromAuth from "../../state/reducers/auth.reducer";
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffect } from 'src/app/state/effects/auth.effect';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AntdModule } from 'src/app/ng-zoro-antd.module';
import { CoreModule } from 'src/app/core/core.module';
import { NzIconsModule } from 'src/app/nz-icon.module';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { IconDefinition } from '@ant-design/icons-angular';
// import * as AllIcons from '@ant-design/icons-angular/icons';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';

// const antDesignIcons = AllIcons as {
//     [key: string]: IconDefinition;
//   };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

const routes : Routes = [
    { path: "", component:LoginComponent,data:{animation :"LoginPage"}}
]
@NgModule({
    imports: [
        CommonModule,
        // NzIconsModule,
        // NzIconModule,
        AntdModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature(fromAuth.KeyAuth,fromAuth.reducer),
        EffectsModule.forFeature([AuthEffect]),
        ReactiveFormsModule,
        FormsModule,
       
    
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [ ],
    // { provide: NZ_ICONS, useValue: icons }
})
export class LoginModule { }
