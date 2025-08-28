import { Component, inject, signal } from '@angular/core';
import { Game } from "../../../components/home/game/game";
import { GameService } from '../../../services/game/game.service';
import { Router } from '@angular/router';
import { TermGameCard } from "../../../components/member/list/term-game-card/term-game-card";

interface IGame {
  id: number;
  name: string;
  image: string;
  details: string;
}

interface IUser {
  id: number;
  email: string;
  password: string;
  fullname: string;
  role: string;
}

@Component({
  selector: 'app-list',
  imports: [Game, TermGameCard],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {
  gameService = inject(GameService);
  router = inject(Router);

  games = signal<IGame[]>([]);
  user = signal<IUser | null>(null);

  isDetailShow = signal(false);
  gameDetail = signal({
    name: "",
    image: "",
    detail: "",
    userId: "",
    amount: 0
  });

  showDetail(name: string, image: string, detail: string) {
    this.isDetailShow.set(true);
    this.gameDetail.set({
      name,
      image,
      detail,
      amount: 0,
      userId: ""
    });
  }

  ngOnInit(): void {
    const existedUser = localStorage.getItem("userProfile");
    if (!existedUser) {
      this.router.navigate(['/']);
      return;
    }
    this.user.set(JSON.parse(existedUser));

    this.gameService.getAll().subscribe(val => {
      this.games.set(val as IGame[]);
    });
  }
}
