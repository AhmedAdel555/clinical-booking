
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserRole } from './userRoles';

@Schema()
export class User {
  @Prop({
    type: String,
    required: true,
    unique:false
})
name: string

  @Prop({
    type:Number,
    required:true
  })
  age: number;

  @Prop({
    type:Number,
    unique:true,
    required:true
  })
  phone: number;

  @Prop({
    unique:true,
    type:String,
    required :true,
    min:3,
    max:7
  })
  email: string;
  @Prop({
    enum:[UserRole.Admin, UserRole.User, UserRole.SuperAdmin],
    type:String,
    default:UserRole.User
  })
role:string;
@Prop({
    enum:['male' , 'female', 'not specified'],
    type:String,
    default:'not specified'
  })
gender:string;

@Prop({
    type:String,
    required :true,
   
  })
  password: string;
  @Prop({
    type:String,
    required :true,
   
  })
  confirm_password: string;


}

export const UserSchema = SchemaFactory.createForClass(User);

