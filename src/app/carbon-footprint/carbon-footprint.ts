import { Component } from '@angular/core';
import { CarbonFootprintForm } from '../carbon-footprint-form/carbon-footprint-form';
import { CarbonFootprintResult } from '../carbon-footprint-result/carbon-footprint-result';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carbon-footprint',
  imports: [CarbonFootprintForm, CarbonFootprintResult, CommonModule],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.scss'
})
export class CarbonFootprint {
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  voyages = [
    { distanceKm: 50, consommationPour100Km: 5 },
    { distanceKm: 150, consommationPour100Km: 6 },
    { distanceKm: 250, consommationPour100Km: 7 },
    { distanceKm: 350, consommationPour100Km: 8 },
    { distanceKm: 450, consommationPour100Km: 9 }
  ];

  ngOnInit() {
    this.calcDistanceEtMoyenne();
  }

  ajouter100km() {
    this.distanceKm += 100;
  }

  genererVoyage() {
    const distance = Math.ceil(Math.random() * 500);
    const consommation = Math.ceil(Math.random() * 10);
    this.voyages.push({ distanceKm: distance, consommationPour100Km: consommation });
    this.calcDistanceEtMoyenne();
  }

  calcDistanceEtMoyenne() {
    // Quatre possibilités de boucles
    // this.voyages.forEach(voyage => this.distanceKm += voyage.distanceKm);
    // this.voyages.forEach(voyage => this.consommationPour100Km += voyage.consommationPour100Km);
    
    // this.voyages.forEach((voyage) => {
    //   this.distanceKm += voyage.distanceKm;
    //   this.consommationPour100Km += voyage.consommationPour100Km;
    // });

    for (let voyage of this.voyages) {
      this.distanceKm += voyage.distanceKm;
      this.consommationPour100Km += voyage.consommationPour100Km;
    }

    // for (let i = 0; i < this.voyages.length; i++) {
    //   this.distanceKm += this.voyages[i].distanceKm;
    //   this.consommationPour100Km += this.voyages[i].consommationPour100Km;
    // }
    this.consommationPour100Km /= this.voyages.length;
  }
}
