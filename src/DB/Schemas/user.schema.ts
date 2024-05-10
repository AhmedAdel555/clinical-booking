import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Organization } from './organization.schema';

export type RoleType = "Super Admin" | "Admin" | "Agent" | "User"

@Schema()
export class User {

  // for all users
  @Prop({
    type: Number,
    unique: true,
    required: true,
  })
  NationalId: number;

  @Prop({
    type: String,
    required: true,
    unique: false,
  })
  username: string;

  @Prop({
    type: Number,
    unique: true,
    required: true,
  })
  phone: number;

  @Prop({
    unique: true,
    type: String,
    required: true,
    min: 3,
    max: 7,
  })
  email: string;
  
  @Prop({
    type: String,
    required: true,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    default: "Active"
  })
  status: string;

  @Prop({
    type: String,
  })
  role:RoleType;

  // for admis
  @Prop({
    type: { type: Types.ObjectId, ref: 'Organization' }
  })
  organizationId: string

  // for admin and service agents
  @Prop({
    type: { type: Types.ObjectId, ref: 'User' }
  })
  createdByUserId: string

  // for service agents
  @Prop({
    type: Boolean
  })
  cash_acceptance: boolean;

  @Prop({
    type: [Date],
  })
  available_dates: Date[]

  @Prop({
    type: [Date],
  })
  booked_dates: Date[]

  @Prop({
    type: { type: Types.ObjectId, ref: 'Service' }
  })
  serviceId: string
}

export const UserSchema = SchemaFactory.createForClass(User);
