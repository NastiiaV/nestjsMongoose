import { Controller, Get } from '@nestjs/common';

import { HealthCheck, HealthCheckService, HttpHealthIndicator, MongooseHealthIndicator } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private mongoose: MongooseHealthIndicator,
    private http: HttpHealthIndicator
  ) {}

  @Get('/db')
  @HealthCheck()
  checkDb() {
    return this.health.check([
      async () => this.mongoose.pingCheck('mongoose')
    ]);
  }

  @Get('/f')
  @HealthCheck()
  checkF() {
    return this.health.check([
      async () => this.http.pingCheck('facebook', 'https://uk-ua.facebook.com/')
    ]);
  }

  @Get('/wrong')
  @HealthCheck()
  checkAPI() {
    return this.health.check([
      async () => this.http.pingCheck('random API', 'https:/hjdkfjdri.com')
    ]);
  }
}