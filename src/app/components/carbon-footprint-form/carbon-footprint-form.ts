import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CarbonFootprintComputeService } from '../../services/carbon-footprint-compute-service';

@Component({
  selector: 'app-carbon-footprint-form',
  imports: [FormsModule, ReactiveFormsModule, TitleCasePipe, MatButtonModule],
  templateUrl: './carbon-footprint-form.html',
  styleUrl: './carbon-footprint-form.scss'
})
export class CarbonFootprintForm {
  form: FormGroup = new FormGroup({
    typeVoyage: new FormControl("voiture", Validators.required),
    distanceKm: new FormControl(0, Validators.min(1)),
    consommationPour100Km: new FormControl(1, Validators.min(1)),
    dateVoyage: new FormControl(new Date(Date.now()), Validators.required)
  });
  listTypesVoyage: string[] = ['voiture', 'train', 'avion'];

  private carbonFootPrintComputeSrv: CarbonFootprintComputeService = inject(CarbonFootprintComputeService);

  async validateForm() {
    if (this.form?.valid) {
      let qteCO2 = 0;
      let consommation = 0;

      if (this.form.value.typeVoyage === 'voiture') {
        consommation = this.form.value.consommationPour100Km;
        qteCO2 = (this.form.value.distanceKm * this.form.value.consommationPour100Km) / 100 * 2.3;
      } else if (this.form.value.typeVoyage === 'train') {
        qteCO2 = this.form.value.quantiteCO2 = this.form.value.distanceKm * 0.03;
      } else {
        qteCO2 = this.form.value.distanceKm * 0.2;
      }

      console.log(this.form.value.dateVoyage);

      await this.carbonFootPrintComputeSrv.addVoyage({
        distanceKm: this.form.value.distanceKm,
        consommationPour100Km: consommation,
        quantiteCO2: qteCO2,
        date: this.form.value.dateVoyage,
        typeVoyage: this.form.value.typeVoyage
      });
    }
  }
}
