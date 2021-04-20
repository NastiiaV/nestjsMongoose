import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutecModule } from './routec/routec.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [RoutecModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin123@cluster0.ukfb4.mongodb.net/nestRoute?retryWrites=true&w=majority', {
      useNewUrlParser: true }),
    HealthModule, TerminusModule ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
