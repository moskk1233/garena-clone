import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  userService = inject(UserService);
  router = inject(Router);

  logout() {
    localStorage.removeItem("userProfile");
    this.router.navigate(['/'])
  }
}
