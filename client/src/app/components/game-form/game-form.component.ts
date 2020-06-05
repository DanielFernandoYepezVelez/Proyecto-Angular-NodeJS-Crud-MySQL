import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IGame } from '../../models/Game';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css'],
})
export class GameFormComponent implements OnInit {
  public edit = false;
  public game: IGame = {
    title: '',
    description: '',
    image: '',
  };

  constructor(
    private gameService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params.id) {
      this.gameService.getGame(params.id).subscribe(
        (res: any) => {
          console.log(res);
          this.game = res.game[0];
          this.edit = true;
        },
        (err) => console.log(err)
      );
    }
  }

  public updateGameForm(e: any, id: string) {
    e.preventDefault();

    // console.log(this.game);
    delete this.game.created_at;

    this.gameService.updateGame(id, this.game).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      (err: any) => console.log(err)
    );
  }

  saveNewGame(e: any) {
    e.preventDefault();

    this.gameService.saveGame(this.game).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      (err: any) => console.log(err)
    );
    // this.game = {};
  }
}
