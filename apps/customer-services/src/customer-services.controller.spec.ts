import { Test, TestingModule } from '@nestjs/testing';
import { CustomerServicesController } from './customer-services.controller';
import { CustomerServicesService } from './customer-services.service';

describe('CustomerServicesController', () => {
  let customerServicesController: CustomerServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerServicesController],
      providers: [CustomerServicesService],
    }).compile();

    customerServicesController = app.get<CustomerServicesController>(CustomerServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(customerServicesController.getHello()).toBe('Hello World!');
    });
  });
});
