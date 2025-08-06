import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private username: string = '';

  login(username: string) {
    this.username = username;
  }

  getUsername() {
    return this.username;
  }
}
