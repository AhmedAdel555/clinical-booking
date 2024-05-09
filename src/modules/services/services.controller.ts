import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/DB/Schemas/service.schema';
import { CreateServiceDTO } from './dto/create-Service.dto';
import { ServicesService } from './services.service';
import { AuthGuard } from 'src/Guards/auth.guard';
import { RoleGuard } from 'src/Guards/role.guard';
import { Role } from 'src/decorators/roles.decorator';

@Controller('services')
export class ServicesController {

  constructor(
    private servicesService:  ServicesService
  ) {}

  @Role("Admin")
  @UseGuards(AuthGuard, RoleGuard)
  @Post()
  async createService(serviceDTO: CreateServiceDTO){
    await this.servicesService.createNewService(serviceDTO); 
    return {message: "Service created Successfully"}
  }

  @Get('/:catalogId')
  async findCatalogServices(@Param('catalogId') catalogId:string){
    return this.servicesService.findCatalogServices(catalogId);
  }
}
