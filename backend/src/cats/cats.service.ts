import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // inserir no banco de dados usando o repository
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // buscará todos os elementos do bd
    return this.cats;
  }
}
