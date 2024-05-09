import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceAgent } from 'src/DB/Schemas/agent.schema';
import { CreateAgentDTO } from './dto/create-agent.dto';
import { Service } from 'src/DB/Schemas/service.schema';

@Injectable()
export class AgentsService {
  constructor(
    @InjectModel(ServiceAgent.name) private agentModel: Model<ServiceAgent>,
    @InjectModel(Service.name) private serviceModel: Model<Service>,
  ) {}

  async createNewAgent(agentDTO: CreateAgentDTO): Promise<ServiceAgent> {
    const newAgent = new this.agentModel({
      name: agentDTO.name,
      email: agentDTO.email,
      mobile: agentDTO.mobile,
      available_dates: agentDTO.available_dates,
      cash_acceptance: agentDTO.cash_acceptance,
      serviceId: agentDTO.serviceId,
    });

    return newAgent.save();
  }

  async findById(id: string): Promise<ServiceAgent> {
    return this.agentModel
      .findById(id)
      .populate('serviceId')
      .populate({
        path: 'serviceId',
        populate: { path: 'organizationId' },
      })
      .exec();
  }

  async findByServiceId(id: string): Promise<ServiceAgent[]> {
    return this.agentModel.find({ serviceId: id }).exec();
  }

  async findAllCatalogServiceAgents(
    catalogId: string,
  ): Promise<ServiceAgent[]> {
    const servicesInCatalog = await this.serviceModel
      .find({ catalogId })
      .exec();

    const serviceIds = servicesInCatalog.map((service) => service._id);

    return this.agentModel
      .find({ serviceId: { $in: serviceIds } })
      .populate('serviceId')
      .populate({
        path: 'serviceId',
        populate: { path: 'organizationId' },
      })
      .exec();
  }
}
