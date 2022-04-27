import { Module } from '@nestjs/common';
import { ConstructorsService } from './constructors.service';
import { ConstructorsController } from './constructors.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ConstructorsController],
  providers: [ConstructorsService]
})
export class ConstructorsModule {}
