import { Controller, Get, Ip, Param, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { LokiConfig } from './config/loki_logger.config';
import { Car } from './models/Car.entity';

@Controller()
export class AppController {
  private logger = this.loggerConfig.getLogger();
  constructor(
    private readonly appService: AppService,
    private readonly loggerConfig: LokiConfig,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/car/:id')
  getCarInfoById(
    @Param('id') id: number,
    @Ip() ip,
    @Req() request: Request,
  ): Car {
    let randomID = randomUUID();
    request.headers['request_id'] = randomID;
    this.logger.info({
      message: 'Method: getCarInfoById',
      labels: {
        request_id: randomID,
        client_ip: ip,
        car_id: id,
        status_code: 200,
      },
    });
    return this.appService.getCarById(id);
  }
}
