import { Injectable } from '@nestjs/common';

@Injectable()
export class PromoterServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
