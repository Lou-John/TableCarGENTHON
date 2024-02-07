// nouvelle-voiture.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';

@Component({
  selector: 'app-ajouter-voiture',
  templateUrl: './ajouter-voiture.component.html',
  styleUrls: ['./ajouter-voiture.component.scss']
})
export class AjouterVoitureComponent {
  marque: string = '';
  modele: string = '';

  constructor(private router: Router, private dataService: DataService) { }

  ajouterVoiture(): void {
    console.log('Marque:', this.marque);
    console.log('Modèle:', this.modele);
    const nouvelleVoitureWithId = {
      id: this.dataService.getNextCarId(),
      marque: this.marque,
      modele: this.modele
    };

    this.dataService.ajouterVoiture(nouvelleVoitureWithId);
    this.router.navigate(['/']);
  }
}
