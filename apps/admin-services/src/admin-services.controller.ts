import { Controller, Get } from '@nestjs/common';
import { AdminServicesService } from './admin-services.service';

@Controller()
export class AdminServicesController {
  constructor(private readonly adminServicesService: AdminServicesService) {}

  @Get()
  getHello(): string {
    return this.adminServicesService.getHello();
  }
}
