import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(4800);
  logger.log('Formula One API Started on port 4800 : ' + (await app.getUrl()));
}
bootstrap();
