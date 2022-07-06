import { Module } from '@nestjs/common';
import { PromoterServicesController } from './promoter-services.controller';
import { PromoterServicesService } from './promoter-services.service';

@Module({
  imports: [],
  controllers: [PromoterServicesController],
  providers: [PromoterServicesService],
})
export class PromoterServicesModule {}
