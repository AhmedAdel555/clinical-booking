import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Agent } from "src/DB/Schemas/agent.schema";




@Injectable()
export class catsrvice{
constructor(
    @InjectModel(Agent.name) private agentmodel:Model<Agent>

){}
//==========get all agents===========
async getAllAgents(body:any ,req , res:any){


const getAllAgentsExit = await this.agentmodel.find();
if (!getAllAgentsExit) {
  throw new BadRequestException('no agents super admin will add soon ');
}

  return res.status(200).json({ message: 'Done', getAllAgentsExit });


}}