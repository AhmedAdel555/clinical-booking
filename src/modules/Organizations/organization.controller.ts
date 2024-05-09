import {Body, Controller, Post, UseGuards } from '@nestjs/common';
import { organizationServices } from './organization.service';
import { OrganizationDto } from './dto/organization.dto';
import { AuthGuard } from 'src/Guards/auth.guard';
import { RoleGuard } from 'src/Guards/role.guard';
import { Role } from 'src/decorators/roles.decorator';


@Controller({ path: '/organization' })
export class organizationController {

  constructor(private readonly orgServices: organizationServices) {}

  @Role('Super Admin')
  @UseGuards(AuthGuard, RoleGuard)
  @Post()
  async createOrganization(@Body() organizationBodyDto: OrganizationDto){
    await this.orgServices.createOrg(organizationBodyDto);
    return {message: "Organization is created"}
  }
  

}
 