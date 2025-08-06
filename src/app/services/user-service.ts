import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class userService {
  username : String = "";
  login(username: string){

  }

  getUsername(username: string){
    if (!username){
      username = "";
    }
  }
}
