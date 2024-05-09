import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';
import { SignUpDto } from '../Auth/dto/signup.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ){}

  async findByEmail(email: string): Promise<User | null>{
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(createUserDTO: SignUpDto, role: string): Promise<User>{
    
    const createdUser = new this.userModel({
      NationalId: createUserDTO.NationalId,
      email: createUserDTO.email,
      password: createUserDTO.password,
      phone: createUserDTO.phone,
      username: createUserDTO.username,
      status: "Active",
      role: role,
      organizationId: createUserDTO.organizationId
    });

    return createdUser.save();
  }


  
}
