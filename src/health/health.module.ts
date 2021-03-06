import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';


@Module({
    imports: [
        TerminusModule,
        MongooseModule.forRoot(process.env.MONGO_DB_URI || 'mongodb+srv://admin:admin123@cluster0.ukfb4.mongodb.net/nestRoute?retryWrites=true' , { useNewUrlParser: true }),
      ],
      controllers: [HealthController],
})
export class HealthModule {
}
