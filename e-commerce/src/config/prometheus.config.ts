import { Injectable } from '@nestjs/common';
import { PrometheusExporter } from '@opentelemetry/exporter-prometheus';
import { HostMetrics } from '@opentelemetry/host-metrics';
import { MeterProvider } from '@opentelemetry/sdk-metrics';

@Injectable()
export class PrometheusConfig {
  meter;
  counterCarRequests;
  counterHouseRequests;
  constructor() {
    // Options
    const options = { port: 9464, startServer: true };
    const exporter = new PrometheusExporter(options);
    const meterProvider = new MeterProvider();
    meterProvider.addMetricReader(exporter);
    this.meter = meterProvider.getMeter('example-prometheus');
    // Create counter
    this.createCounterCarRequests();
    // Create counter
    this.createCounterHouseRequests();
    const hostMetrics = new HostMetrics({
      meterProvider,
      name: 'example-host-metrics',
    });
    hostMetrics.start();
  }

  createCounterCarRequests() {
    this.counterCarRequests = this.meter.createCounter('counter-car-requests', {
      
      monotonic: true,
      description: 'Counts total number of car requests',
    });
  }

  createCounterHouseRequests() {
    this.counterHouseRequests = this.meter.createCounter(
      'counter-house-requests',
      {
        monotonic: true,
        description: 'Counts total number of house requests',
      },
    );
  }
}
