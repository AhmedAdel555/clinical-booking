import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';
import { Roles } from 'src/modules/Auth/auth.roles';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @InjectModel(User.name) private _userModel: Model<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      throw new BadRequestException('please send role');
      return false;
    }
    const request = context.switchToHttp().getRequest();

    if (request?.authUser) {
      const { _id } = request.authUser;
      const user = await this._userModel.findById({ _id });
      console.log(roles);
      console.log(user.role);
      if (!roles.includes(user.role)) {
        throw new BadRequestException('wrong token');
      }
      return roles.includes(user.role);
    }

    return true;
  }
}
