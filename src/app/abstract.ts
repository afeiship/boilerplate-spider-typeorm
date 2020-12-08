import "reflect-metadata";
import { createConnection } from "typeorm";
import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { EntityTarget } from 'typeorm/common/EntityTarget';

export default class {
  public async connect(): Promise<EntityManager> {
    return new Promise((resolve, reject) => {
      createConnection().then(async connection => {
        const manager = connection.manager;
        resolve(manager)
      }).catch(reject);
    })
  }

  public async create(inEntity: EntityTarget<any>, inData: Array<any>) {
    const manager = await this.connect();
    for (let item of inData) {
      try {
        const data = await manager.create(inEntity, item);
        await manager.save(data);
      } catch (e) {
      }
    }
  }

  protected start() {
    console.log('must implement.');
  }
}
