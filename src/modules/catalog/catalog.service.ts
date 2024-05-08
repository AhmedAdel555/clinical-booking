import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Catalog } from "src/DB/Schemas/catalog.schema";



@Injectable()
export class catsrvice{
constructor(
    @InjectModel(Catalog.name) private catalogmodel:Model<Catalog>

){}
//==========add catalog===========
async addCatalog(body:any ,req , res:any){
const {catalog_name}=body
//console.log(req)
const user =req['authUser']
//console.log(user)

const catalogExit = await this.catalogmodel.findOne({ catalog_name });
if (catalogExit) {
  throw new BadRequestException('email is elready exist');
}
const catalog = await this.catalogmodel.create({catalog_name})

if (!catalog) {
    throw new BadRequestException('fail to add user');
  }
  return res.status(200).json({ message: 'Done', catalog });


}
////////////
}