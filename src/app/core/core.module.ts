 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.components';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SliderComponent } from './components/slider/slider.component';
// module ng-zoro-ant
import { NZ_ICONS } from 'ng-zorro-antd/icon';

import { AntdModule } from '../ng-zoro-antd.module';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])
 
 @NgModule({
     imports: [
        CommonModule,
        RouterModule,
        AntdModule
     ],
     exports: [],
     declarations: [LayoutComponent,
                    // FooterComponent,
                    // HeaderComponent,
                    // SliderComponent
                    ],
     providers: [
        { provide: NZ_ICONS, useValue: icons }
     ],
 })
 export class CoreModule { }
 