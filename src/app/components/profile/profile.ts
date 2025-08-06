import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  nomUtilisateur: string = '';

  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.nomUtilisateur = this.activatedRoute.snapshot.params['nom'];
  }
}
