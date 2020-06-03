import { app } from "./app";

class Main {
  constructor() {
    this.init();
  }

  private init(): void {
    app.middlewares();
    app.routes();
    app.server();
  }
}

new Main();
