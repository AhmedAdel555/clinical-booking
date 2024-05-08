import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { boolean } from 'zod';

import { Permission } from './permisions.schema';
import { Types } from 'mongoose';

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
  confirm_password: string;

  @Prop({
    type: boolean,
    required: true,
  })
  status: string;

  @Prop({
    
    type: { type: Types.ObjectId, ref: 'Permission' , required:true,},
   
  })
  permission:Permission;
}

export const UserSchema = SchemaFactory.createForClass(User);
