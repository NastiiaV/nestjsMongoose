import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutecModule } from './routec/routec.module';
import { HealthController } from './health/health.controller';
import { HealthModule } from './health/health.module';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

// USER = admin
// PASSWORD = admin123
// DB = nestRoute
//`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ukfb4.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`
@Module({
  imports: [RoutecModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot( process.env.MONGO_DB_URI, { useNewUrlParser: true }),
    HealthModule, TerminusModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule { }
