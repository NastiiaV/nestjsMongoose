import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RoutecService } from './routec.service';
import { Routec } from './routec.model';
import { routecDto } from './routeC.dto';


@Controller('routec')
export class RoutecController {
    constructor (private cService: RoutecService){}

    @Get()
    findAll(): Promise<Routec []> {
        return this.cService.findAll();
    }
    
    @Post()
    create(@Body() cObj: routecDto): Promise<Routec> {
        return this.cService.create(cObj);
    }

    @Put(':id')
    update(@Param('id') objId: string, @Body() cObj: routecDto): Promise<Routec> {
        return this.cService.update(objId, cObj);
    }

    @Delete(':id')
    delete(@Param('id') objId: string): Promise<void> {
        return this.cService.delete(objId);
    }
}
