import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { allowNavigateAwayGuard } from './core/guard/allow-navigate-away.guard';
import { LoginComponent } from './login/login/login.component';
import { PermissionDeniedComponent } from './components/permission-denied.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  { path: 'permission-denied', component: PermissionDeniedComponent},
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [allowNavigateAwayGuard]
})
export class AppRoutingModule { }
