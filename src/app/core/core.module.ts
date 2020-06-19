 import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layouts/layout.components';
// import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
// import { SliderComponent } from './components/slider/slider.component';
// module ng-zoro-ant


import { AntdModule } from '../ng-zoro-antd.module';


 
 @NgModule({
     imports: [
        CommonModule,
        RouterModule,
        AntdModule
     ],
     exports: [],
     declarations: [
                     LayoutComponent,
                    // FooterComponent,
                    
                    // HeaderComponent,
                    // SliderComponent
                    ],
     providers: [
      
     ],
 })
 export class CoreModule { }
 