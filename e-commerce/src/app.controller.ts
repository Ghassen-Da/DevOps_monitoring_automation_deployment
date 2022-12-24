import { Controller, Get, Ip, Param, Req } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { AppService } from './app.service';
import { LokiConfig } from './config/loki_logger.config';

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

  @Get('/car/info/:id')
  getCarInfoById(
    @Ip() ip,
    @Req() request: Request,
    @Param('id') id: number,
  ): any {
    let randomID = randomUUID();
    request.headers['request_id'] = randomID;
    this.logger.info({
      message: 'Invoke car microservice: getCarInfoById',
      labels: {
        request_id: randomID,
        client_ip: ip,
        car_id: id,
        status_code: 200,
      },
    });
    return this.appService.getCarById(id);
  }

  @Get('/house/info/:id')
  getHouseInfoById(
    @Ip() ip,
    @Req() request: Request,
    @Param('id') id: number,
  ): any {
    let randomID = randomUUID();
    request.headers['request_id'] = randomID;
    this.logger.info({
      message: 'Invoke house microservice: getHouseInfoById',
      labels: {
        request_id: randomID,
        client_ip: ip,
        house_id: id,
      },
    });
    return this.appService.getHouseById(id);
  }
}
