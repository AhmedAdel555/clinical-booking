import { Controller, Get, Param, ParseIntPipe, Post, UseGuards } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { CreateAgentDTO } from './dto/create-agent.dto';
import { AuthGuard } from 'src/Guards/auth.guard';
import { RoleGuard } from 'src/Guards/role.guard';
import { Role } from 'src/decorators/roles.decorator';

@Controller('agents')
export class AgentsController {

  constructor(
   private agentService : AgentsService
  ){}

  @Role("Admin")
  @UseGuards(AuthGuard, RoleGuard)
  @Post()
  async createNewAgent(agentDTO: CreateAgentDTO){
    await this.agentService.createNewAgent(agentDTO);
    return {message: "Agent Created Successfully"}
  }
  
  @Get('/:id')
  @UseGuards(AuthGuard)
  async findAgentById(@Param('id') id: string){
     return await this.agentService.findById(id);
  }

  @Get('/services/:serviceId')
  @UseGuards(AuthGuard)
  async findServiceAgents(@Param('serviceId') id: string){
    return await this.agentService.findByServiceId(id);
  }

  @Get('/catalogs/:catalogId')
  @UseGuards(AuthGuard)
  async fingCatalogAgents(@Param('catalogId') id: string){
    return await this.agentService.findAllCatalogServiceAgents(id);
  }
}
