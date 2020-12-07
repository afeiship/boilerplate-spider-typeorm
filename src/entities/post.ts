import { Entity, Column } from "typeorm";
import Abstract from './abstract';

@Entity('posts')
export default class Latest extends Abstract {

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: false })
  grabbed: boolean;

}
