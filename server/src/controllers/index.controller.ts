import { Request, Response } from "express";

class IndexController {
  public async index(req: Request, res: Response): Promise<Response<JSON>> {
    return res.json({
      msg: "desde el index",
    });
  }
}

export const indexController = new IndexController();
