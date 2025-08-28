import {  Component, inject, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../services/user/user.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface IUser {
  id: number;
  email: string;
  password: string;
  fullname: string;
  role: string;
}

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userService = inject(UserService);
  router = inject(Router);

  email = signal<string>("");
  password = signal<string>("");

  login() {
    this.userService.getUser().subscribe(val => {
      const users = val as IUser[];

      const existedUser = users.find(val => this.email() === val.email && this.password() === val.password);
      if (!existedUser) {
        Swal.fire({
          title: "Email or password is invalid",
          icon: "error"
        });
      } else {
        localStorage.setItem("userProfile", JSON.stringify(existedUser));
        this.router.navigate(['/']);
      }
    });
  }
}
