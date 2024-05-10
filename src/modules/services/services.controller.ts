import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CreateServiceDTO } from './dto/create-Service.dto';
import { ServicesService } from './services.service';

@Controller('services')
export class ServicesController {

  constructor(
    private servicesService:  ServicesService
  ) {}


  @Post()
  async createService(@Body() serviceDTO: CreateServiceDTO){
    await this.servicesService.createNewService(serviceDTO); 
    return {message: "Service created Successfully"}
  }

  @Get('/:catalogId')
  async findCatalogServices(@Param('catalogId') catalogId:string){
    return this.servicesService.findCatalogServices(catalogId);
  }
}
