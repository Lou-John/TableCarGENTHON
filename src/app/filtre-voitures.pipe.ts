import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreVoitures'
})
export class FiltreVoituresPipe implements PipeTransform {
  transform(voitures: any[], filtre: string): any[] {
    if (!filtre || filtre.length < 3) return voitures;

    return voitures.filter(voiture =>
      voiture.marque.toLowerCase().startsWith(filtre.toLowerCase()) || 
      voiture.modele.toLowerCase().startsWith(filtre.toLowerCase())
    );
  }
}
