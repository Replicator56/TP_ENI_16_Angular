import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarbonFootprint } from '../../components/carbon-footprint/carbon-footprint';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule, CarbonFootprint],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
}
