import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {NbLoginComponent, NbLogoutComponent, NbRegisterComponent} from "@nebular/auth";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
      },
      // {
      //   path: 'login',
      //   component: NbLoginComponent
      // },
      // {
      //   path: 'register',
      //   component: NbRegisterComponent
      // },
      // {
      //   path: 'logout',
      //   component: NbLogoutComponent
      // }
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

