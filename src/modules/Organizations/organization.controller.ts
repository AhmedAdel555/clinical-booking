import { Controller, Get, UseGuards } from '@nestjs/common';
import { organizationServices } from './organization.service';
import { AuthGuard } from 'src/Guards/auth.guards';
//import { RolesGuard } from 'src/Guards/roles.guards';


@Controller({ path: '/org' })
export class organizationController {
  constructor(private readonly orgServices: organizationServices) {}

  //=========routes
  @Get('new')
  @UseGuards(AuthGuard)
 // @UseGuards(RolesGuard)
  //@Roles('Admin')
  newOrg() {
    return this.orgServices.createOrg();
  }
}
 