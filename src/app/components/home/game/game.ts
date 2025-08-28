import { Component, input } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.html',
  styleUrl: './game.css'
})
export class Game {
  image = input.required<string>();
  title = input.required<string>();
}
