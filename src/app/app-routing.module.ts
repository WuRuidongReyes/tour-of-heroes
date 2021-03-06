import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetialComponent } from './hero-detial/hero-detial.component';


const routes: Routes = [
  { path: 'herodetail/:id', component: HeroDetialComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'herolist', component: HeroListComponent },
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
