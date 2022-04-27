import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CircuitsService } from './circuits.service';
import { Circuit } from './entities/circuit.entity';

@Controller('circuits')
export class CircuitsController {
  constructor(private readonly circuitsService: CircuitsService) {}

  @Get()
  @ApiTags('Circuits')
  @ApiResponse({
    status: 200,
    description: 'Récupération de tout les circuits.',
    type: [Circuit],   
  })
  async findAll() {
    return await this.circuitsService.findAll();
  }

  @Get(':id')
  @ApiTags('Circuits')
  @ApiResponse({
    status: 200,
    description: 'Récupération d\'un circuits par son id.',
    type: [Circuit],   
  })
  async findById(@Param('id') id: string) {
    return await this.circuitsService.findById(id);
  }

  @Get('/year/:year')
  @ApiTags('Circuits')
  @ApiResponse({
    status: 200,
    description: 'Récupération des circuits d\'une année.',
    type: [Circuit],   
  })
  async findByYear(@Param('year') year: number) {
    return await this.circuitsService.findByYear(year);
  }

  @Get(':year/:round')
  @ApiTags('Circuits')
  @ApiResponse({
    status: 200,
    description: 'Récupération du circuits d\'une course dans l\'année.',
    type: [Circuit],   
  })
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.circuitsService.findByYearAndRound(year, round);
  }
}
