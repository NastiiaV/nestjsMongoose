import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutecController } from './routec.controller';
import { RoutecService } from './routec.service';
import { RouteSchema } from './routec.model';

@Module({
  controllers: [RoutecController],
  providers: [RoutecService],
  imports: [
    MongooseModule.forFeature([{ name: 'RouteC', schema: RouteSchema }]),
  ]
})
export class RoutecModule {}
