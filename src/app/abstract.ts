import "reflect-metadata";
import { createConnection } from "typeorm";
import { EntityManager } from 'typeorm/entity-manager/EntityManager';


export default class {
  public async getManager(): Promise<EntityManager> {
    return new Promise((resolve, reject) => {
      createConnection().then(async connection => {
        const manager = connection.manager;
        resolve(manager)
      }).catch(reject);
    })
  }

  protected start() {
    console.log('must implement.');
  }
}
