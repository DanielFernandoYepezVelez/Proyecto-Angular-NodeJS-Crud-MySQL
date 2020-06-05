import "./libs/mysql2";

import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexRouter from "./routes/index.routes";
import gamesRouter from "./routes/games.routes";

class App {
  constructor(public app: Application) {}

  public middlewares(): void {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  public routes(): void {
    this.app.use("/api/index", indexRouter);
    this.app.use("/api/games", gamesRouter);
  }

  public async server(): Promise<void> {
    try {
      const port = await this.app.listen(process.env.PORT);

      if (port) console.log(`Server On Port ${process.env.PORT}`);
    } catch {
      console.log("Port No Connected!");
    }
  }
}

export const app = new App(express());
