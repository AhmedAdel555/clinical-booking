import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from 'src/DB/Schemas/organization.schema';
import { organizationBodyDto } from './organization.dto';
import { Model } from 'mongoose';

@Injectable()
export class organizationServices {
  constructor(
    @InjectModel(Organization.name)
    private organizationmodel: Model<Organization>,
  ) {}
  
  //==========API========
  async createOrg(organication: organizationBodyDto): Promise<void> {
    const newOrganization = await this.organizationmodel.create({
      name: organication.name,
      Org_Status: organication.Org_Status,
      Bank_account: organication.Bank_account,
      License_ID: organication.License_ID,
      Financial_Limit_From: organication.Financial_Limit_From,
      Financial_Limit_TO: organication.Financial_Limit_TO,
    })
  }
}
