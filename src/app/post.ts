import "reflect-metadata";
import { createConnection } from "typeorm";
import Abstract from './abstract';
import Post from '../entities/post';

class App extends Abstract {
  public async start() {
    const manager = await this.connect();
    const posts = await manager.find(Post, { where: { grabbed: false } });
    console.log('posts:', nx, posts);
  }
}

(async () => {
  const app = new App();
  await app.start();
})()
