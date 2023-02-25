import {
  Entity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity({ schema: 'board', name: 'Articles' })
export class Article {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { length: 10 })
  author: string;

  @Column('varchar', { length: 50 })
  title: string;

  @Column('varchar', { length: 50 })
  content: string;

  @Column('varchar', { length: 50 })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date | null;
}
