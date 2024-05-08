import { Body, Controller, Get, Res, UseGuards, UsePipes } from '@nestjs/common';
import { organizationServices } from './organization.service';

import { organizationBodyDto } from './organization.dto';

import { AuthGuard } from 'src/Guards/auth.guards';
import { Response } from 'express';
import { orgSchema } from './org.validationSchema';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
//import { RolesGuard } from 'src/Guards/roles.guards';

@Controller({ path: '/org' })
export class organizationController {
  constructor(private readonly orgServices: organizationServices) {}

  //=========routes
  @Get('new')

  @UseGuards(AuthGuard)
  @UsePipes(new ZodValidationPipe(orgSchema))
  newOrg(@Body() body :organizationBodyDto, @Res() res:Response) {
    return this.orgServices.createOrg(body , res)
  }
  
}
 