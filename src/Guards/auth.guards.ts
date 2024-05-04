import { Injectable, CanActivate, ExecutionContext, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose';


import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';



@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _JwtService: JwtService,
        @InjectModel(User.name) private _userModel: Model<User>,
      ) { }

    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        // console.log({request});
        const { authorization } = request.headers
        // console.log(authorization);
        if (!authorization) {
            throw new BadRequestException('pleaee lognIn')
        }

        if (!authorization.startsWith('clinic_')) {
            throw new BadRequestException('wrong prefix')
        }
        const token = authorization.split('clinic_')[1]
        const decodedData = this._JwtService.verify(token, { secret: 'login' })
        if (!decodedData.id) {
            throw new BadRequestException('wrong token')
        }
        const user = await this._userModel.findOne({ _id: decodedData.id })
        if (!user) {
            throw new BadRequestException('please signup')

        }
        request['authUser'] = user
        return true
    }
}

