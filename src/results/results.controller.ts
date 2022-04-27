import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ResultsService } from './results.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Result } from './entities/result.entity';

@Controller('results')
export class ResultsController {
  constructor(private readonly resultsService: ResultsService) {}

  @Get('/last')
  @ApiTags('Resultats')
  @ApiResponse({
    status: 200,
    description: 'Récupération des derniers résulats.',
    type: [Result],   
  })
  async findAll() {
    return await this.resultsService.findRecentRaceResult();
  }

  @Get(':year/:round')
  @ApiTags('Resultats')
  @ApiResponse({
    status: 200,
    description: 'Récupération d\'un resulat d\'une course dans l\'année.',
    type: [Result],   
  })
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.resultsService.findByYearAndRound(year, round);
  }
}
