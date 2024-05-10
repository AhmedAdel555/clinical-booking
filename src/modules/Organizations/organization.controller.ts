import {Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { organizationServices } from './organization.service';
import { OrganizationDto } from './dto/organization.dto';


@Controller({ path: '/organization' })
export class organizationController {

  constructor(private readonly orgServices: organizationServices) {}

  @Post()
  async createOrganization(@Body() organizationBodyDto: OrganizationDto){
    await this.orgServices.createOrg(organizationBodyDto);
    return {message: "Organization is created"}
  }

  @Get()
  async findAllOrganization(){
    return this.orgServices.findAllOrganizations();
  }
}
 