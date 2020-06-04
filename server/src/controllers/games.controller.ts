import { Request, Response } from "express";

import connection from "../libs/mysql2";

class GamesController {
  public async getGames(req: Request, res: Response): Promise<Response<JSON>> {
    /* Obtengo Una Promesa */
    const conexionPromesa = await connection;
    /* Aqui La Remato Para Poder Obtener Su Valor Final */
    const games = await conexionPromesa.query("SELECT * FROM games");

    return res.json({
      ok: true,
      games: games[0],
    });
  }

  public async getGame(req: Request, res: Response): Promise<Response<JSON>> {
    const { id } = req.params;

    if (id) {
      const conexionPromesa = await connection;
      const game = await conexionPromesa.query(
        "SELECT * FROM games WHERE id = ?",
        [id]
      );

      if (game) {
        return res.json({
          ok: true,
          game: game[0],
        });
      }
    }

    return res.status(400).json({
      ok: false,
      message: "Game doesn't Exist!",
    });
  }

  public async createGame(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    let consulta: any;

    const { title, description, image } = req.body;

    if (title && description && image) {
      const conexionPromesa = await connection;
      consulta = await conexionPromesa.query("INSERT INTO games SET ?", [
        req.body,
      ]);
    }

    if (consulta) {
      return res.json({
        ok: true,
        message: "Game Saved!",
      });
    }

    return res.status(400).json({
      ok: false,
      message: "Game doesn't Saved!",
    });
  }

  public async updateGame(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { id } = req.params;
    const { title, description, image } = req.body;

    if (id && title && description && image) {
      const conexionPromesa = await connection;
      const gameUpdated = await conexionPromesa.query(
        "UPDATE games SET ? WHERE id = ?",
        [req.body, id]
      );

      if (gameUpdated) {
        return res.json({
          ok: true,
          message: "Game Updated!",
        });
      }
    }

    return res.status(400).json({
      ok: false,
      message: "Game doesn´t Updated!",
    });
  }

  public async deleteGame(
    req: Request,
    res: Response
  ): Promise<Response<JSON>> {
    const { id } = req.params;

    if (id) {
      const conexionPromesa = await connection;
      const gameDeleted = await conexionPromesa.query(
        "DELETE FROM games WHERE id = ?",
        [id]
      );

      if (gameDeleted) {
        return res.json({
          ok: true,
          message: "Game Deleted!",
        });
      }
    }

    return res.status(400).json({
      ok: false,
      message: "Game doesn't Deleted!",
    });
  }
}

export const gamesController = new GamesController();
