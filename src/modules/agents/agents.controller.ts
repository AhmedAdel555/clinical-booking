import { Controller } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDTO } from './dto/create-new-agent.dto';

@Controller('agents')
export class AgentsController {

  constructor(
   private agentService : AgentsService
  ){}

  async createNewAgent(agentDTO: CreateAgentDTO){
    await this.agentService.createNewAgent(agentDTO);
  }

}
