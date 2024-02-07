import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauVoitureComponent } from './tableau-voiture/tableau-voiture.component';
import { HeaderComponent } from './header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FiltreVoituresPipe } from './filtre-voitures.pipe';
import { AjouterVoitureComponent } from './ajouter-voiture/ajouter-voiture.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauVoitureComponent,
    HeaderComponent,
    FiltreVoituresPipe,
    AjouterVoitureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
