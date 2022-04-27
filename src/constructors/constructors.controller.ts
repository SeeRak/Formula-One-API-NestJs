import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiResponseProperty, ApiTags } from '@nestjs/swagger';
import { ConstructorsService } from './constructors.service';
import { Constructor } from './entities/constructor.entity';

@Controller('constructors')
export class ConstructorsController {
  constructor(private readonly constructorsService: ConstructorsService) {}

  @Get()
  @ApiTags('Constructeurs')
  @ApiResponse({
    status: 200,
    description: 'Récupération de tout les constructeurs.',
    type: [Constructor],   
  })
  async findAll() {
    return await this.constructorsService.findAll();
  }

  @Get(':id')
  @ApiTags('Constructeurs')
  @ApiResponse({
    status: 200,
    description: 'Récupération d\'un constructeur par son id.',
    type: [Constructor],   
  })
  async findById(@Param('id') id: string) {
    return await this.constructorsService.findById(id);
  }

  @Get('/year/:year')
  @ApiTags('Constructeurs')
  @ApiResponse({
    status: 200,
    description: 'Récupération des constructeur d\'une année.',
    type: [Constructor],   
  })
  async findByYear(@Param('year') year: number) {
    return await this.constructorsService.findByYear(year);
  }

  @Get(':year/:round')
  @ApiTags('Constructeurs')
  @ApiResponse({
    status: 200,
    description: 'Récupération des constructeur d\'une course dans l\'année.',
    type: [Constructor],   
  })
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.constructorsService.findByYearAndRound(year, round);
  }
}
