import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../services/user';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  private router: Router = inject(Router);
  private userSrv: User = inject(User);

  navigate() {
    this.userSrv.login('Jean');
    this.router.navigate(['/summary']);
  }
}
