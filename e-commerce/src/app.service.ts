import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { PrometheusConfig } from './config/prometheus.config';
import { Car } from './models/Car.entity';
import { House } from './models/House.entity';

@Injectable()
export class AppService {

  // nestjs default logger
  private readonly logger = new Logger(PrometheusConfig.name);

  constructor(
    private readonly httpService: HttpService,
    private readonly prometheusConfig: PrometheusConfig,
  ) {}

  getHello(): string {
    return 'Welcome to the e-commerce API!!';
  }

  getCarById(id: number): Observable<AxiosResponse<Car>> {
    this.prometheusConfig.counterCarRequests.add(1, { pid: process.pid });
    return this.httpService
      .get('http://host.docker.internal:3001/car/' + id)
      .pipe(map((response) => response.data));
  }

  getHouseById(id: number): Observable<AxiosResponse<House>> {
    this.prometheusConfig.counterHouseRequests.add(1, { pid: process.pid });
    return this.httpService
      .get('http://host.docker.internal:3002/house/' + id)
      .pipe(map((response) => response.data));
  }
}
