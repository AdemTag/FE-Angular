import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./pages/signup/signup.component";
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {DashboardComponent} from "./pages/admin/dashboard/dashboard.component";

import {AdminGuard} from "./services/admin.guard";
import {NormalGuard} from "./services/normal.guard";
import {ProfileComponent} from "./pages/profile/profile.component";
import {DetailPdocComponent} from "./detail-pdoc/detail-pdoc.component";
import {FileUploadComponent} from "./file-upload/file-upload.component";


const routes: Routes = [
  {
    path: '',
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: 'detail-porte-document/:id',
    component: DetailPdocComponent
  },

  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: "full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'detail-porte-document/:id',
        component: DetailPdocComponent
      },
      {
        path: '',
        component: ProfileComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'upload',
        component: FileUploadComponent
      },

    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
