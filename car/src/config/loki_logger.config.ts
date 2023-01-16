import { Injectable } from '@nestjs/common';
import { createLogger, transports, format, Logger } from 'winston';
import LokiTransport from 'winston-loki';

@Injectable()
export class LokiConfig {
  logger: Logger;

  constructor() {
    if (this.logger) {
      return;
    }

    this.logger = createLogger({
      transports: [
        new LokiTransport({
          host: 'http://loki.monitoring.svc.cluster.local:3100',
          labels: { app: 'car' },
          json: true,
          format: format.json(),
          replaceTimestamp: true,
          onConnectionError: (err) => console.error(err),
        }),
        new transports.Console({
          format: format.combine(
            format.simple(),
            format.colorize(),
            format.json(),
          ),
        }),
      ],
    });
  }

  getLogger = () => {
    return this.logger;
  };
}
