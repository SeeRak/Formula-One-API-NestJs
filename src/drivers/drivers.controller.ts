import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DriversService } from './drivers.service';
import { Driver } from './entities/driver.entity';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  @ApiTags('Pilotes')
  @ApiResponse({
    status: 200,
    description: 'Récupération de tout les pilotes.',
    type: [Driver],   
  })
  async findAll() {
    return await this.driversService.findAll();
  }

  @Get(':id')
  @ApiTags('Pilotes')
  @ApiResponse({
    status: 200,
    description: 'Récupération d\'un pilote par son id.',
    type: [Driver],   
  })
  async findById(@Param('id') id: string) {
    return await this.driversService.findById(id);
  }

  @Get('/year/:year')
  @ApiTags('Pilotes')
  @ApiResponse({
    status: 200,
    description: 'Récupération des pilotes d\'une année.',
    type: [Driver],   
  })
  async findByYear(@Param('year') year: number) {
    return await this.driversService.findByYear(year);
  }

  @Get(':year/:round')
  @ApiTags('Pilotes')
  @ApiResponse({
    status: 200,
    description: 'Récupération des pilotes d\'une course dans l\'année.',
    type: [Driver],   
  })
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.driversService.findByYearAndRound(year, round);
  }
}
