import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column } from "typeorm";
import '@jswork/next';

export default class {

  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

}
