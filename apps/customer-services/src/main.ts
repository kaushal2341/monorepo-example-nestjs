import { NestFactory } from '@nestjs/core';
import { CustomerServicesModule } from './customer-services.module';

async function bootstrap() {
  const app = await NestFactory.create(CustomerServicesModule);
  await app.listen(3000);
}
bootstrap();
