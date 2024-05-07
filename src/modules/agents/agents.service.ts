import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agent } from 'src/DB/Schemas/agent.schema';
import { CreateAgentDTO } from './dto/create-new-agent.dto';
import { Service } from 'src/DB/Schemas/service.schema';
import { Organization } from 'src/DB/Schemas/organization.schema';

@Injectable()
export class AgentsService {

  constructor(
    @InjectModel(Agent.name) private agentmodel: Model<Agent>,
    @InjectModel(Organization.name) private organizationmodel: Model<Organization>,
  ){}

  async createNewAgent(agentDTO: CreateAgentDTO){

     const agentOrganization = await this.organizationmodel.findById(agentDTO.serviceId).exec();

     const newAgent = this.agentmodel.create({
        name: agentDTO.name,
        email: agentDTO.email,
        mobile: agentDTO.mobile,
        cash_acceptancea: agentDTO.cash_acceptance,
        available_dates: agentDTO.available_dates,
        organization: agentOrganization
     })
  }

}
