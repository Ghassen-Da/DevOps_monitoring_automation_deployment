import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Car } from './models/Car.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/car/:id')
  getCarInfoById(@Param('id') id: number): Car {
    return this.appService.getCarById(id);
  }
}
