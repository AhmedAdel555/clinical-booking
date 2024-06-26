import * as bcryptjs from 'bcryptjs';
import { BadRequestException, Injectable, UsePipes } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import { Permission } from 'src/DB/Schemas/permisions.schema';

@Injectable()
export class authService {
  constructor(
    @InjectModel(User.name) private usermodel: Model<User>,
    @InjectModel(Permission.name) private permissionmodel: Model<Permission>,
    private jwtService: JwtService,
  ) {}

  async signUp(body: any, res: any, permisionId: string): Promise<object> {
    const {
      NationalId,
      username,
      phone,
      email,
      password,
      confirm_password,
     status,
    } = body;

    const permission = this.permissionmodel.findById(permisionId);
    
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
     permission
    });
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

    const isPasswordMatch = bcryptjs.compareSync(
      password,
      userExists['password'],
    );
    if (!isPasswordMatch) {
      throw new BadRequestException('in-valid login credential');
    }

    const token = this.jwtService.sign(
      {
        email: userExists['email'],
        id: userExists['_id'],
        role: userExists['role'],
      },
      {
        secret: 'login',
      },
    );
    return res.status(200).json({ message: 'Done', userExists, token });
  }

  async getUserDataServic(req: any, res: any): Promise<object> {
    const { _id } = req.authUser;
    const user = await this.usermodel.findById({ _id });
    return res.status(200).json({ message: 'done', user });
  }
}
