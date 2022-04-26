import { Controller, Get, Param } from '@nestjs/common';
import { DriversService } from './drivers.service';

@Controller('drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  @Get()
  async findAll() {
    return await this.driversService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.driversService.findById(id);
  }

  @Get('/year/:year')
  async findByYear(@Param('year') year: number) {
    return await this.driversService.findByYear(year);
  }

  @Get(':year/:round')
  async findByYearAndRound(@Param('year') year: number, @Param('round') round: number) {
    return await this.driversService.findByYearAndRound(year, round);
  }
}
