import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { ConstructorsModule } from './constructors/constructors.module';
import { DriversModule } from './drivers/drivers.module';

@Module({
  imports: [DriversModule, ConstructorsModule],
  controllers: [],
  providers: [],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
