import "reflect-metadata";
import Abstract from './abstract';
import Post from '../entities/post';

const { conf } = nx.$global;


class App extends Abstract {
  public async start() {
    const manager = await this.connect();
    const posts = await manager.find(Post, { where: { grabbed: false } });
    console.log('posts:', posts, nx.VERSION);
    console.log(conf.gets());
  }
}

(async () => {
  const app = new App();
  await app.start();
})()
