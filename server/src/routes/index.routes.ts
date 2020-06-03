import { Router } from "express";

import { indexController } from "../controllers/index.controller";

class IndexRoute {
  constructor(public router: Router) {
    this.router.get("/", indexController.index);
    this.router.post("/");
  }
}

const indexRoute = new IndexRoute(Router());
export default indexRoute.router;
