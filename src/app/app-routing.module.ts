import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultsComponent } from './consults/consults.component';
import { BonusgeneratorComponent } from './bonusgenerator/bonusgenerator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consults', component: ConsultsComponent },
  { path: 'bonusgenerator', component: BonusgeneratorComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
