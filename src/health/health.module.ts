import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';


@Module({
    imports: [
        TerminusModule,
        MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ukfb4.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
        { useNewUrlParser: true }),
      ],
      controllers: [HealthController],
})
export class HealthModule {
}
