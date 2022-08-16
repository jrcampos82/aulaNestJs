import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/cats.dto';

// CatService catService = new CatService();

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): CreateCatDto[] {
    return this.catsService.findAll();
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `encontrei o bichano com id ${params.id}`;
  }

  @Get('find/:id')
  findOneMore(@Param('id') id: number) {
    return this.catsService.findOne(id);
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    // return `estou criando um cat de ${createCatDto.age}
    // anos chamado ${createCatDto.name}`;
    this.catsService.create(createCatDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateCat: CreateCatDto) {
    this.catsService.update(updateCat, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return 'delete cat';
  }
}
