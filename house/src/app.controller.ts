import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { House } from './models/House.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/house/:id')
  getCarInfoById(@Param('id') id: number): House {
    return this.appService.getHouseById(id);
  }
}
