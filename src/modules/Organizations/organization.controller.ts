import { Controller, Get, UseGuards } from '@nestjs/common';
import { organizationServices } from './organization.service';
import { AuthGuard } from 'src/Guards/auth.guards';
//import { RolesGuard } from 'src/Guards/roles.guards';
import { Roles } from '../Auth/auth.roles';
import { organizationBodyDto } from './organization.dto';

@Controller({ path: '/org' })
export class organizationController {
  constructor(private readonly orgServices: organizationServices) {}

  //=========routes
  @Get('new')
  @UseGuards(AuthGuard)
  @Roles('Admin')
  async newOrg(organizationDto: organizationBodyDto) {
    await this.orgServices.createOrg(organizationDto);
    return 'organization created';
  }
}
 