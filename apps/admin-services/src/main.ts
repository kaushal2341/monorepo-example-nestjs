import { NestFactory } from '@nestjs/core';
import { AdminServicesModule } from './admin-services.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminServicesModule);
  await app.listen(process.env.PORT);
}
bootstrap();
