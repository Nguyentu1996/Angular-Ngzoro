import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layouts/layout.components';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      { path:'',redirectTo:'manager',pathMatch:'full'},
      { path:'home',loadChildren:()=> import('./module/HomeLazyLoad.module').then(m=>m.HomeLazyLoadModule),data: {animation: 'HomePage'}},
      { path:'manager',loadChildren:()=> import('./module/ManageLazyLoad.module').then(m=>m.ManageLazyLoadModule),data: {animation: 'ManagePage'}}
    ]
  },
  {
    path:'',component:LayoutComponent,
    children:[
      {path:"**",loadChildren:()=> import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
