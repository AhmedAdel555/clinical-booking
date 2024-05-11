import { Body, Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { Response } from 'express';

@Controller('users')
export class UsersController {
 
   constructor(private readonly _userservice:UsersService){}
//==========get by id 
@Get('getbyid')
getbyid(@Body() body:any){
    return this._userservice.getUserbyId(body)
}
//================gel all agents
   @Get('getallagents')
getalluser( res :Response){
 return this._userservice.getAllAgents(res)
}
//====
@Get('getbyidandrole')
getuserbyIdandRole(@Body() body:any){
return this._userservice.getUserByIdAndRole(body)
}
//================== get all agents in selected service 
@Get('selectedservice')
getallagentainselectedservice(@Body() body:any){
    return this._userservice.getAgentsByService(body)
}

}
