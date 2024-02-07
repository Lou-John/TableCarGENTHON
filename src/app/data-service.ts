import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    voitures = [
        { id: 1, marque: 'Toyota', modele: 'Corolla' },
        { id: 2, marque: 'Honda', modele: 'Civic' },
        { id: 3, marque: 'Ford', modele: 'Mustang' },
        { id: 4, marque: 'BMW', modele: 'X5' },
        { id: 5, marque: 'Mercedes-Benz', modele: 'C-Class' },
        { id: 6, marque: 'Audi', modele: 'A4' },
        { id: 7, marque: 'Volkswagen', modele: 'Golf' },
        { id: 8, marque: 'Tesla', modele: 'Model 3' },
        { id: 9, marque: 'Nissan', modele: 'Altima' },
        { id: 10, marque: 'Chevrolet', modele: 'Camaro' }
      ];

  constructor() { }

  getVoitures(): any[] {
    return this.voitures;
  }

  ajouterVoiture(nouvelleVoiture: any): void {
    this.voitures.push(nouvelleVoiture);
  }

  getNextCarId(): number {
    return Math.max(...this.voitures.map(voiture => voiture.id), 0) + 1;
  }
}
