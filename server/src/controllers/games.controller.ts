import { Request, Response } from "express";

import connection from "../libs/mysql2";

class GamesController {
  public async index(req: Request, res: Response): Promise<Response<JSON>> {
    /* Obtengo Una Promesa */
    const conexionPromesa = await connection;
    /* Aqui La Remato Para Poder Obtener Su Valor Final */
    const games = await conexionPromesa.query("SELECT * FROM games");

    return res.json({
      msg: "desde el Games",
    });
  }
}

export const gamesController = new GamesController();
