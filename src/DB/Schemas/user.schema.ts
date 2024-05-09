import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Organization } from './organization.schema';

@Schema()
export class User {

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
  })
  status: string;

  @Prop({
    type: String,
  })
  role:string;

  @Prop({
    type: { type: Types.ObjectId, ref: 'Organization' }
  })
  organizationId: string
}

export const UserSchema = SchemaFactory.createForClass(User);
