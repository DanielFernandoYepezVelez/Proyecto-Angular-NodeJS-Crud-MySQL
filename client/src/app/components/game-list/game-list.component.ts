import { Component, OnInit, HostBinding } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  public games: any = [];

  constructor(private gameService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  public getGames() {
    this.gameService.getGames().subscribe(
      (res: any) => {
        this.games = res.games;
      },
      (err) => console.log(err)
    );
  }

  public deleteGame(e: any, id: string) {
    e.preventDefault();

    this.gameService.deleteGame(id).subscribe(
      (res) => {
        console.log(res);
        this.getGames();
      },
      (err) => console.log(err)
    );
  }
}
