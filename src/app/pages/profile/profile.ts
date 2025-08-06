import { Component, inject } from '@angular/core';
import { Header } from '../../components/header/header';
import { userService } from '../../services/user-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {
  private userService :  userService = inject(userService) 
}
