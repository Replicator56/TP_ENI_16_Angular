import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  nomUtilisateur: string = '';

  private userSrv: User = inject(User);

  ngOnInit() {
    this.nomUtilisateur = this.userSrv.getUsername();
  }
}
