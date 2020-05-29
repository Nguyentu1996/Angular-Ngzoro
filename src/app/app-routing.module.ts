import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './core/layouts/layout.components';


const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      { path:'',redirectTo:'home',pathMatch:'full'},
      { path:'home',loadChildren:()=> import('./page-features/home/home.module').then(m=>m.HomeModule)},
      { path:'manager',loadChildren:()=> import('./page-features/management/management.module').then(m=>m.ManagementModule)}
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
