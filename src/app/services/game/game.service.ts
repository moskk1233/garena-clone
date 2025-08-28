import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface IGame {
  id: number;
  name: string;
  image: string;
  details: string;
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  httpClient = inject(HttpClient);
  constructor() {
  }

  getAll() {
    return this.httpClient.get('/assets/data/games.json');
  }
}
