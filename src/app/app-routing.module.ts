import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { allowNavigateAwayGuard } from './products/allow-navigate-away.guard';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)},
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [allowNavigateAwayGuard]
})
export class AppRoutingModule { }
