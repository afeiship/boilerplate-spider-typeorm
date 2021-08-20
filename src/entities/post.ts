import { Entity, Column } from 'typeorm';
import { Crawlable } from './crawlable';

@Entity('posts')
export class Post extends Crawlable {
  @Column()
  title: string;

  @Column()
  content: string;
}
