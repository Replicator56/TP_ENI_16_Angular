import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CarbonFootprintForm } from '../carbon-footprint-form/carbon-footprint-form';
import { CarbonFootprintResult } from '../carbon-footprint-result/carbon-footprint-result';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint-compute-service';
import { Voyage } from '../../models/voyage';

@Component({
  selector: 'app-carbon-footprint',
  imports: [CarbonFootprintForm, CarbonFootprintResult, CommonModule, MatButtonModule],
  templateUrl: './carbon-footprint.html',
  styleUrl: './carbon-footprint.scss'
})
export class CarbonFootprint {
  distanceKm: number = 0;
  consommationPour100Km: number = 0;
  voyages: Voyage[] = [];
  quantiteTotaleCO2: number = 0;

  // Injection du service dans le composant
  private carbonFootprintComputeSrv: CarbonFootprintComputeService = inject(CarbonFootprintComputeService);

  ngOnInit() {
    this.voyages = this.carbonFootprintComputeSrv.getVoyages();
    this.actualiserDataVoyages();
  }

  ajouter100km() {
    this.distanceKm += 100;
  }

  genererVoyage() {
    const distance = Math.ceil(Math.random() * 500);
    const consommation = Math.ceil(Math.random() * 10);
    const quantite = (distance * consommation) / 100 * 2.3;
    this.carbonFootprintComputeSrv.addVoyage({ distanceKm: distance, consommationPour100Km: consommation, quantiteCO2: quantite });
    this.voyages = this.carbonFootprintComputeSrv.getVoyages();
    this.actualiserDataVoyages();
  }

  actualiserDataVoyages() {
    const result = this.carbonFootprintComputeSrv.getResumeVoyages();
    this.distanceKm = result.distanceKm;
    this.consommationPour100Km = result.consommationPour100Km / this.voyages.length;
    this.quantiteTotaleCO2 = result.quantiteCO2;
  }
}
