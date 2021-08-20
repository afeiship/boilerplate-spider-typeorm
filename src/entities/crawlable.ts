import { Column } from 'typeorm';
import { Abstract } from './abstract';

export class Crawlable extends Abstract {
  @Column({ default: false })
  grabbed: boolean;
}
