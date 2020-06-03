import { Router } from "express";

import { gamesController } from "../controllers/games.controller";

class GamesRoute {
  constructor(public router: Router) {
    this.router.get("/", gamesController.index);
  }
}

const gamesRoute = new GamesRoute(Router());
export default gamesRoute.router;
