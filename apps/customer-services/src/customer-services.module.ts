import { Module } from '@nestjs/common';
import { CustomerServicesController } from './customer-services.controller';
import { CustomerServicesService } from './customer-services.service';

@Module({
  imports: [],
  controllers: [CustomerServicesController],
  providers: [CustomerServicesService],
})
export class CustomerServicesModule {}
