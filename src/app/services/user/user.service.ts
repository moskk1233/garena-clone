import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = false;
  private httpClient = inject(HttpClient);

  isLogin() {
    const profile = localStorage.getItem("userProfile");
    return !!profile
  }

  getUser() {
    return this.httpClient.get("/assets/data/members.json");
  }
}
