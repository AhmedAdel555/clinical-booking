import * as bcryptjs from 'bcryptjs';
import { BadRequestException, Injectable, UsePipes } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class authService {
  constructor(
    @InjectModel(User.name) private usermodel: Model<User>,
    private jwtService: JwtService,
  ) {}
  //==========================sign up api

  async signUp(body: any, res: any): Promise<object> {
    const {
      NationalId,
      username,
      phone,
      email,
      password,
      confirm_password,
     status,
     permission
    } = body;

    
    const userExit = await this.usermodel.findOne({ email });
    if (userExit) {
      throw new BadRequestException('email is elready exist');
    }

    const hashadPass = bcryptjs.hashSync(password as string, 8 as number);
    const user = await this.usermodel.create({
      NationalId,
      username,
      phone,
      email,
      password:hashadPass,
      confirm_password,
     status,
     permission:permission
    })
    if (!user) {
      throw new BadRequestException('fail to add user');
    }
    return res.status(200).json({ message: 'Done', user });
  }
  //=========log in service =============
  async LogInService(body: any, res: any): Promise<object> {
    const { email, password } = body;
    const userExists = await this.usermodel.findOne({ email });
    if (!userExists) {
      throw new BadRequestException('in-valid login credential');
    }
console.log(userExists)
    const isPasswordMatch = bcryptjs.compareSync(
      password,
      userExists['password'],
    );
    if (!isPasswordMatch) {
      throw new BadRequestException('in-valid lofin credential');
    }

    const token = this.jwtService.sign(
      {
        email: userExists['email'],
        id: userExists['_id'],
       

      },
      {
        secret: 'login',
      },

    );
    return res.status(200).json({ message: 'Done', userExists, token });
  }
  //========================getUserDataServic====================
  async getUserDataServic(req: any, res: any): Promise<object> {
    const { _id } = req.authUser;
    const user = await this.usermodel.findById({ _id });
    return res.status(200).json({ message: 'done', user });
  }
}
