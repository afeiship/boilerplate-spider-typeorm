import { PrimaryGeneratedColumn, CreateDateColumn, Column } from 'typeorm';

export class Abstract {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}
