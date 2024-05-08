import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  Admin = 'Admin',
  SuperAdmin = 'Super Admin',
  User = 'Patient',
}

@Schema()
export class Permission {

  @Prop({
    required:true,
    enum: [UserRole.Admin, UserRole.User, UserRole.SuperAdmin],
    type: String,
    default: UserRole.User,
  })
  role: string;
  
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
