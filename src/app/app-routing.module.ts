import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {AdventureComponent} from './adventure/adventure.component';
import {LoginComponent} from './login/login.component';
import {CountryComponent} from './country/country.component';
import {LogoutComponent} from './logout/logout.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'api/adventures',
    component: AdventureComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'api/countries',
    component: CountryComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
