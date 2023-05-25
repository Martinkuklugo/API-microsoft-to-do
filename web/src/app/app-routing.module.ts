import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FormLoginComponent } from './pages/form-login/form-login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';


const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path: "form-login",
    component:FormLoginComponent
  },
  {
    path: "register-user",
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
