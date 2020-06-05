import { Router } from "express";

import { gamesController } from "../controllers/games.controller";

class GamesRoute {
  constructor(public router: Router) {
    this.router.get("/", gamesController.getGames);
    this.router.get("/:id", gamesController.getGame);
    this.router.post("/create", gamesController.createGame);
    this.router.put("/update/:id", gamesController.updateGame);
    this.router.delete("/delete/:id", gamesController.deleteGame);
  }
}

const gamesRoute = new GamesRoute(Router());
export default gamesRoute.router;
