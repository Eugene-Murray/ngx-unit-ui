import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CssComponent } from './pages/css/css.component';
import { ComponentsComponent } from './pages/components/components.component';
import { LayoutsComponent } from './pages/layouts/layouts.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'css', component: CssComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'layouts', component: LayoutsComponent },
];
