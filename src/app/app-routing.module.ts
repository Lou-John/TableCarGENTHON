import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterVoitureComponent } from './ajouter-voiture/ajouter-voiture.component';
import { TableauVoitureComponent } from './tableau-voiture/tableau-voiture.component';

const routes: Routes = [
  { path: '', component: TableauVoitureComponent},
  { path: 'ajouter-voiture', component: AjouterVoitureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
