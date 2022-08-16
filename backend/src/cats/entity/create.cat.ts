import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CreateCat {
  @PrimaryGeneratedColumn()
  id: string; // uuid
  name: string;
  age: number;
}
