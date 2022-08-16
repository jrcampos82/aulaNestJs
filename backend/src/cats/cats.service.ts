import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  create(cat: CreateCatDto) {
    // inserir no banco de dados usando o repository
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    // buscará todos os elementos do bd
    return this.cats;
  }

  findOne(id: number) {
    const cat = this.cats.filter((value) => value.id === id);
    return cat; // filter, map
  }

  remove(id: number) {
    const cats_remove = this.cats.filter((value) => value.id !== id);
    this.cats = cats_remove;
  }

  update(createCatDto: CreateCatDto, id: number) {
    const cat = this.findOne(createCatDto.id);

    // atualizar ele na lista
  }
}
