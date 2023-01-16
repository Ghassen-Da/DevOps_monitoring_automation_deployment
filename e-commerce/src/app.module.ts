import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LokiConfig } from './config/loki_logger.config';
import { PrometheusConfig } from './config/prometheus.config';


@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, PrometheusConfig, LokiConfig],
})
export class AppModule {}
