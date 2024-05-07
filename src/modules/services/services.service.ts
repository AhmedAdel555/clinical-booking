import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Service } from 'src/DB/Schemas/service.schema';
import { CreateServiceDTO } from './dto/create-Service.dto';
import { Organization } from 'src/DB/Schemas/organization.schema';
import { Catalog } from 'src/DB/Schemas/catalog.schema';
import { Agent } from 'src/DB/Schemas/agent.schema';

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name)
    private servicemodel: Model<Service>,
    @InjectModel(Organization.name)
    private organizationmodel: Model<Organization>,
    @InjectModel(Agent.name)
    private agentmodel: Model<Agent>,
    @InjectModel(Catalog.name)
    private catalogmodel: Model<Catalog>,
  ) {}

  async createNewService(service: CreateServiceDTO, admin_id: string) {
    // get the oranization

    const serviceOrganization = await this.organizationmodel
      .findOne({ admin: admin_id })
      .exec();

    const serviceCatalog = await this.catalogmodel.findById(service.catalog_id).exec();

    const agent = await this.agentmodel.findById(service.agentId).exec();


    // create service
    const newService = await this.servicemodel.create({
         service_name: service.service_name,
         service_description: service.service_description,
         service_fees_amount:  service.service_fees_amount,
         service_fees_description: service.service_fees_description,
         organization: serviceOrganization,
         catalog: serviceCatalog,
         available_dates: service.available_dates,
         agent: agent
    })

  }
}
