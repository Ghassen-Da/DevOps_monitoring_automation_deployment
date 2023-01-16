import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LokiConfig } from './config/loki_logger.config';
import { PrometheusConfig } from './config/prometheus.config';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LokiConfig, PrometheusConfig],
})
export class AppModule {}
