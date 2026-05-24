import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { PageNotFound } from './pages/page-not-found/page-not-found';
// import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'about', component:About},
    {path:'contact', component:Contact},
    {path:'**', component:PageNotFound}
];
