import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { routecDto } from './routeC.dto';
import { Routec } from './routec.model';

@Injectable()
export class RoutecService {
    constructor(@InjectModel('RouteC') private readonly routeModel: Model<Routec>) {}

    async create(data: routecDto): Promise <Routec> {
        const newObj = new this.routeModel(data);
        if (typeof (data.speciality) !== 'number') {
            throw new HttpException("400 BadRequest", 400)
        }
        else {
            return newObj.save();
        }
        
    }

    async findAll(): Promise<Routec[]> {
        return await this.routeModel.find().exec();
    }

    async update(id: string, data: routecDto): Promise< Routec > {
        return await this.routeModel.findByIdAndUpdate(id, data , { new: true });
    }

    async delete(id: string): Promise<void> {
        const result = await this.routeModel.findByIdAndRemove(id);
    }
}
