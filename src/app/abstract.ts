import "reflect-metadata";
import { createConnection } from "typeorm";
import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { EntityTarget } from 'typeorm/common/EntityTarget';
import './setup';

export default class {
  private manager = null;

  public async connect(): Promise<EntityManager> {
    return new Promise((resolve, reject) => {
      if (!this.manager) {
        createConnection().then(async connection => {
          this.manager = connection.manager;
          resolve(this.manager);
        }).catch(reject);
      } else {
        resolve(this.manager);
      }
    });
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
