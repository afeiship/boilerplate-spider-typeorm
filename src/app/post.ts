import "reflect-metadata";
import { createConnection } from "typeorm";

class App {
  public async start() {
    console.log('start!');
  }
}

(async () => {
  const app = new App();
  await app.start();
})()
