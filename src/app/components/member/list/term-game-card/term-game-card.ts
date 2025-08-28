import { Component, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-term-game-card',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './term-game-card.html',
  styleUrl: './term-game-card.css'
})
export class TermGameCard {
  name = input.required<string>();
  image = input.required<string>();
  detail = input.required<string>();

  userId = signal<string>("");
  amount = signal<number>(0)

  onPayment() {
    Swal.fire({
      title: "เติมเกมสำเร็จ",
      text: `ทำรายการเติมเกม ${this.name()} สำหรับผู้ใช้ ID ${this.userId()} จำนวน ${this.amount()} บาท`,
      icon: "success"
    })
  }
}
