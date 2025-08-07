import { Injectable } from '@angular/core';
import { Voyage } from '../models/voyage';

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {
  private listVoyages: Voyage[] = [
    { distanceKm: 50, consommationPour100Km: 5, quantiteCO2: 0, date: new Date(Date.now()) },
    { distanceKm: 150, consommationPour100Km: 6, quantiteCO2: 0, date: new Date(Date.now()) },
    { distanceKm: 250, consommationPour100Km: 7, quantiteCO2: 0, date: new Date(Date.now()) },
    { distanceKm: 350, consommationPour100Km: 8, quantiteCO2: 0, date: new Date(Date.now()) },
    { distanceKm: 450, consommationPour100Km: 9, quantiteCO2: 0, date: new Date(Date.now()) }
  ];

  constructor() {
    this.listVoyages.forEach((value) => {
      value.quantiteCO2 = (value.distanceKm * value.consommationPour100Km) / 100 * 2.3;
    });
  }

  getVoyages() {
    return this.listVoyages;
  }

  addVoyage(voyage: Voyage) {
    this.listVoyages.push(voyage);
  }

  getResumeVoyages() {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteCO2 = 0;

    for (let voyage of this.listVoyages) {
      distanceKm += voyage.distanceKm;
      consommationPour100Km += voyage.consommationPour100Km;
      quantiteCO2 += voyage.quantiteCO2;
    }
    return { distanceKm, consommationPour100Km, quantiteCO2 };
  }
}
