import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Swagger API Formula One')
  .setDescription('Vous retrouverez ici toutes les routes disponibles de l\'api')
  .setVersion('1.0')
  .addTag("Constructeurs")
  .addTag("Pilotes")
  .addTag("Circuits")
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.enableCors();
  await app.listen(4800);
  logger.log('Formula One API Started on port 4800 : ' + (await app.getUrl()));
}
bootstrap();
