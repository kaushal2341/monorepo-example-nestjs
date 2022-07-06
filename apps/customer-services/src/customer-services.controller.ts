import { Controller, Get } from '@nestjs/common';
import { CustomerServicesService } from './customer-services.service';

@Controller()
export class CustomerServicesController {
  constructor(private readonly customerServicesService: CustomerServicesService) {}

  @Get()
  getHello(): string {
    return this.customerServicesService.getHello();
  }
}
