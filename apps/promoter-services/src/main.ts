import { NestFactory } from '@nestjs/core';
import { PromoterServicesModule } from './promoter-services.module';
import {sayHello} from '@lib/helpers'
async function bootstrap() {
  const app = await NestFactory.create(PromoterServicesModule);
  await app.listen(process.env.PORT);
  sayHello()
}
bootstrap();
