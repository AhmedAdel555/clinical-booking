import { Controller, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/DB/Schemas/service.schema';
import { CreateServiceDTO } from './dto/create-Service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {

  constructor(
    private servicesService:  ServicesService
  ) {}

  async createService(serviceDTO: CreateServiceDTO, @Req() req){
    await this.servicesService.createNewService(serviceDTO, req.authUser.id); 
  }

  

}
