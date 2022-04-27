import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';

@Controller('constructors')
export class ConstructorsController {
  constructor(private readonly constructorsService: ConstructorsService) {}

  @Get()
  async findAll() {
    return await this.constructorsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.constructorsService.findById(id);
  }

  @Get('/year/:year')
  async findByYear(@Param('year') year: number) {
    return await this.constructorsService.findByYear(year);
  }

  @Get(':year/:round')
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.constructorsService.findByYearAndRound(year, round);
  }
}
