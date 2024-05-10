import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/DB/Schemas/user.schema';
import { SignUpDTO } from '../Auth/dto/signup.dto';
import { SignUpAdminDTO } from '../Auth/dto/signup-admin.dto';
import { SignUpAgentDTO } from '../Auth/dto/signup-agent.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
  ){}

  async findByEmail(email: string): Promise<User | null>{
    return this.userModel.findOne({ email }).exec();
  }

  async createUser(createUserDTO: SignUpDTO): Promise<User>{
    
    const createdUser = new this.userModel({
      NationalId: createUserDTO.NationalId,
      email: createUserDTO.email,
      password: createUserDTO.password,
      phone: createUserDTO.phone,
      username: createUserDTO.username,
      status: "Active",
      role: "User",
    });
    return createdUser.save();
  }  

  async createAdmin(createUserDTO: SignUpAdminDTO, superAdminId: string){
    const createdUser = new this.userModel({
      NationalId: createUserDTO.NationalId,
      email: createUserDTO.email,
      password: createUserDTO.password,
      phone: createUserDTO.phone,
      username: createUserDTO.username,
      status: "Active",
      role: "Admin",
      organizationId: createUserDTO.organizationId,
      createdByUserId: superAdminId
    });
    return createdUser.save();
  }

  async createAgent(createUserDTO: SignUpAgentDTO, adminId: string){

    const admin = await this.userModel.findById(adminId).exec();

    const createdUser = new this.userModel({
      NationalId: createUserDTO.NationalId,
      email: createUserDTO.email,
      password: createUserDTO.password,
      phone: createUserDTO.phone,
      username: createUserDTO.username,
      status: "Active",
      role: "Agent",
      organizationId: admin.organizationId,
      createdByUserId: adminId,
      available_dates: createUserDTO.available_dates,
      cash_acceptance: createUserDTO.cash_acceptance,
      serviceId: createUserDTO.serviceId
    });
    return createdUser.save();
  } 
}
