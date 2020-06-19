import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './shared/services/guard/auth-guard.service';


const routes: Routes = [
  { path:'auth',loadChildren:()=>import("./Auth/auth.module").then(m=>m.AuthModule),data:{animation:"PageAuth"}}, 
  { path:'home',loadChildren:()=> import('./page-features/home/Homemodule/home.modules').then(m=>m.HomeSModule),data: {animation: 'HomePage'},canActivate:[AuthGuardService]},
  { path:'manager',loadChildren:()=> import('./page-features/management/module/manage.module').then(m=>m.ManageModule),data: {animation: 'ManagePage'},canActivate:[AuthGuardService]},
  { path:'',redirectTo:'auth',pathMatch:'full'},
  { path:"**",component:PageNotFoundComponent,data:{animation:"pageNotFound"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
