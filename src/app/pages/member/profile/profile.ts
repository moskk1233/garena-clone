import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';

interface IUser {
  id: number;
  email: string;
  password: string;
  fullname: string;
  role: string;
}

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {
  router = inject(Router);

  user = signal<IUser | null>(null);

  ngOnInit(): void {

    const existedUser = localStorage.getItem("userProfile");
    if (!existedUser) {
      this.router.navigate(['/']);
      return;
    }
    this.user.set(JSON.parse(existedUser));
  }
}
