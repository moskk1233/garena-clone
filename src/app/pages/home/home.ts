import { Component, inject, OnInit, signal } from '@angular/core';
import { Game } from "../../components/home/game/game";
import { GameService } from '../../services/game/game.service';
import { Router } from '@angular/router';

interface IGame {
  id: number;
  name: string;
  image: string;
  details: string;
}

@Component({
  selector: 'app-home',
  imports: [Game],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {
  gameService = inject(GameService);
  router = inject(Router);

  games = signal<IGame[]>([]);;

  ngOnInit(): void {
    const existedUser = localStorage.getItem("userProfile");
    if (existedUser) {
      this.router.navigate(['/member/list'])
    }

    this.gameService.getAll().subscribe(val => {
      this.games.set(val as IGame[]);
    });
  }
}
