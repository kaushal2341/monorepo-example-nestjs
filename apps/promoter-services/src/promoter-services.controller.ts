import { Controller, Get } from '@nestjs/common';
import { PromoterServicesService } from './promoter-services.service';

@Controller()
export class PromoterServicesController {
  constructor(private readonly promoterServicesService: PromoterServicesService) {}

  @Get()
  getHello(): string {
    return this.promoterServicesService.getHello();
  }
}
