import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { CreateConstructorDto } from './dto/create-constructor.dto';
import { UpdateConstructorDto } from './dto/update-constructor.dto';

@Controller('constructors')
export class ConstructorsController {
  constructor(private readonly constructorsService: ConstructorsService) {}

  @Post()
  create(@Body() createConstructorDto: CreateConstructorDto) {
    return this.constructorsService.create(createConstructorDto);
  }

  @Get()
  findAll() {
    return this.constructorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.constructorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConstructorDto: UpdateConstructorDto) {
    return this.constructorsService.update(+id, updateConstructorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.constructorsService.remove(+id);
  }
}
