import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import otelSDK from './config/tracing';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();
