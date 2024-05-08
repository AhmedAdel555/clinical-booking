import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose'; 
import { User } from './user.schema';
import { Service } from './service.schema';

@Schema()
export class Organization {
  @Prop({
    type: String,
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: Number,
    required: true,
    unique: true,
  })
  License_ID: number;
  
  @Prop({
    type: String,
    enum: ['online', 'offline'],

    default: 'online',
  })
  Org_Status: string;

  @Prop({
    type: Number,
  })
  Financial_Limit_From: number;

  @Prop({
    type: Number,
  })
  Financial_Limit_TO: number;

  @Prop({
    type: Number,
  })
  Bank_account: number;

  @Prop({
    type: { type: Types.ObjectId, ref: 'User' }
  })
  admin: User
  @Prop({
    type:[{quantity:{type:Number}, service:{type:Types.ObjectId}}]
  })
  services: { quantity: number; service: Service }[]; 
}
export const organizationSchema = SchemaFactory.createForClass(Organization);
