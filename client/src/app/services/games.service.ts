import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IGame } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  public getGames(): Observable<IGame> {
    return this.http.get(`${this.API_URI}/games`);
  }

  public getGame(id: string): Observable<IGame> {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  public saveGame(game: IGame): Observable<IGame> {
    return this.http.post(`${this.API_URI}/games/create/`, game);
  }

  public updateGame(id: string, updateGame: IGame): Observable<IGame> {
    return this.http.put(`${this.API_URI}/games/update/${id}`, updateGame);
  }

  public deleteGame(id: string): Observable<IGame> {
    return this.http.delete(`${this.API_URI}/games/delete/${id}`);
  }
}
