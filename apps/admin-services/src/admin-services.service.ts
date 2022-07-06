import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminServicesService {
  getHello(): string {
    return 'Hello World!';
  }
}
