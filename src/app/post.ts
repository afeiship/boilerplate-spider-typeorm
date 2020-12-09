import "reflect-metadata";
import Abstract from './abstract';
import Post from '../entities/post';

class App extends Abstract {
  public async start() {
    const manager = await this.connect();
    const posts = await manager.find(Post, { where: { grabbed: false } });
    console.log(typeof nx);
    console.log('posts:', posts, nx.VERSION);
  }
}

(async () => {
  const app = new App();
  await app.start();
})()
