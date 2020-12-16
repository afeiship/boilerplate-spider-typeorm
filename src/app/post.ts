import "reflect-metadata";
import Abstract from './abstract';
import Post from '../entities/post';

const { conf, log } = nx.$global;


class App extends Abstract {
  public async start() {
    const manager = await this.connect();
    const posts = await manager.find(Post, { where: { grabbed: false } });
    log.dt('posts:', posts, nx.VERSION, conf.gets());
  }
}

(async () => {
  const app = new App();
  await app.start();
})()
