import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data-service';

@Component({
  selector: 'app-tableau-voiture',
  templateUrl: './tableau-voiture.component.html',
  styleUrls: ['./tableau-voiture.component.scss'],
})

export class TableauVoitureComponent implements OnInit{

  voitures: any[] = [];

  getNextCarId(): number {
    return Math.max(...this.voitures.map(voiture => voiture.id), 0) + 1;
  } 

  constructor(private router: Router, private dataService: DataService) { }
  // Affichage card voiture
  voitureSelectionnee: any;
  
  afficherDetails(voiture: any) {
    this.voitureSelectionnee = voiture;
    /*
    if(voiture = this.voitureSelectionnee){
      this.voitureSelectionnee = null;
    }
    else{
      this.voitureSelectionnee = voiture;
    }*/    
  }

  fermerDetails() {
    this.voitureSelectionnee = null; 
  }

  // Suppresion et ajout de voitures
  supprimerVoiture(voiture: any) {
    const index = this.voitures.findIndex(v => v.id === voiture.id);
    this.voitures.splice(index, 1);
    this.fermerDetails();
  }

  ajouterVoiture() {
    this.router.navigate(["ajouter-voiture"]);
  }


  filtre: string = '';
  ngOnInit(): void {
    this.voitures = this.dataService.getVoitures();
  }

}
