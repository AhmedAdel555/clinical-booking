import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from 'src/DB/Schemas/organization.schema';




@Injectable()
export class organizationServices {
  constructor(@InjectModel(Organization.name) private orgModel :Model<Organization>) {}
  //==========API========
  async createOrg(body:any, res:any): Promise<object> {
   const addorg=await this.orgModel.create(body)

   if(!addorg){
    throw new BadRequestException('no organization is added');
   }
      
   return res.status(200).json({ message: 'Done', addorg });

  return 
  }
 
}
