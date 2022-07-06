import { Test, TestingModule } from '@nestjs/testing';
import { PromoterServicesController } from './promoter-services.controller';
import { PromoterServicesService } from './promoter-services.service';

describe('PromoterServicesController', () => {
  let promoterServicesController: PromoterServicesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PromoterServicesController],
      providers: [PromoterServicesService],
    }).compile();

    promoterServicesController = app.get<PromoterServicesController>(PromoterServicesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(promoterServicesController.getHello()).toBe('Hello World!');
    });
  });
});
