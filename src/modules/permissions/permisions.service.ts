import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { privateDecrypt } from "crypto";
import { Model } from "mongoose";
import { Permission } from "src/DB/Schemas/permisions.schema";


@Injectable()
export class permisionServices{
    constructor(
        @InjectModel(Permission.name) private permModel:Model<Permission>
    ){ }
    //=====add permisiond===
    async addPermission(body:any,res:any){
      const {role}=body
      const addPerm= await this.permModel.create({role})
      if(!addPerm){
        throw new BadRequestException('no permission added')
      }
      return res.status(200).json({message:"perminssion added", addPerm})

    }
}