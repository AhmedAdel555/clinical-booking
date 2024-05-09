import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/DB/Schemas/service.schema';
import { CreateServiceDTO } from './dto/create-Service.dto';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private serviceModel: Model<Service>,
  ) {}

  async createNewService(service: CreateServiceDTO): Promise<Service> {

    const newService = new this.serviceModel({
         service_name: service.service_name,
         service_description: service.service_description,
         service_fees_amount:  service.service_fees_amount,
         service_fees_description: service.service_fees_description,
         catalogId: service.catalog_id,
         organizationId: service.organizationId
    })

    return newService.save()
  }

  async findCatalogServices(catalogId:string): Promise<Service[]>{
    return this.serviceModel.find({ catalogId })
    .populate('organizationId', ['name', 'License_ID', 'Org_Status']); // Populate organizationId with desired fields
  }
}
