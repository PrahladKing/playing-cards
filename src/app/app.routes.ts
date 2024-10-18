import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path: 'signin', component: SigninComponent},
    {path: 'home', component: HomeComponent},
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];
