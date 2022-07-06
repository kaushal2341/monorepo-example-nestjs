import { Test, TestingModule } from '@nestjs/testing';
import { AdminServicesController } from './admin-services.controller';
import { AdminServicesService } from './admin-services.service';

describe('AdminServicesController', () => {
  let adminServicesController: AdminServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdminServicesController],
      providers: [AdminServicesService],
    }).compile();

    adminServicesController = app.get<AdminServicesController>(AdminServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(adminServicesController.getHello()).toBe('Hello World!');
    });
  });
});
