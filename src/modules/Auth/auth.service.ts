import * as bcryptjs from 'bcryptjs';
import { BadRequestException, Injectable, UsePipes } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/DB/Schemas/user.schema";
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { signUpScehma } from './auth.validationSchema';

@Injectable()
export class authService{
    constructor(
        @InjectModel(User.name) private usermodel:Model<User> ,
        private jwtService: JwtService
    ){}
//sign up api

    async signUp(req : any , res:any) :Promise<object>{ 
       const {name
         , age 
         , phone
         , email
          ,role
           ,gender
           ,password
           ,confirm_password
        }=req
        
        const nameExit = await this.usermodel.findOne({ name})
        if(nameExit){
            throw new BadRequestException('email is elready exist')
        }
        const userExit = await this.usermodel.findOne({ email})
        if(userExit){
            throw new BadRequestException('email is elready exist')
        }
       
        const hashadPass= bcryptjs.hashSync(password as string, 8 as number)
        const user = await this.usermodel.create(
            {name
                , age, 
                phone
                , email
                 ,role
                  ,gender
                  ,password: hashadPass
                  ,confirm_password 
               }
        )
        if(!user){
            throw new BadRequestException('fail to add user')
        }
        return res.status(200).json({message:"Done",user})
    }
    //=========log in service =============
    async LogInService(body: any, res: any): Promise<object> {
        const { email, password } = body
        const userExists = await this.usermodel.findOne({email})
        if (!userExists) {
            throw new BadRequestException('in-valid login credential')
        }

        const isPasswordMatch = bcryptjs.compareSync(password, userExists['password'])
        if (!isPasswordMatch) {
            throw new BadRequestException('in-valid lofin credential')
        }


        const token = this.jwtService.sign({
            email: userExists['email'],
            id: userExists['_id'],
            role:userExists['role']
        }, {
            secret: 'login'
        })
        return res.status(200).json({ message: 'Done' , userExists, token })
       // return {"log in api":"fff"}
    }
    //API change pass 
   /*async changPass(req : any , res:any) :Promise<object>{
     //const {oldpassword , newPassword}=body
     const {email ,
         old_pass , 
         new_Pass
        }=req.body
        const {_id}=req.authUser
     const isUserExist= await this.usermodel.findById(_id)
     if(!isUserExist){
        throw new BadRequestException('email is wrong')
     }
     const isPasswordMatch = bcryptjs.compareSync(old_pass, isUserExist['password'])
       if(!isPasswordMatch) {
        throw new BadRequestException('the password is wrong')
       }
       const new_password = bcryptjs.hashSync(new_Pass as string,8 as number)
       const updateduser= await this.usermodel.findOneAndUpdate({email},{password:new_password ,
        confirm_password:new_Pass

       },{new:true})
       if(!updateduser){
        throw new BadRequestException('password not updated')
       }
     return res.status(200).json({message:"Done" , updateduser})
   }*/
   async getUserDataServic(req: any, res: any): Promise<object> {
    const { _id } = req.authUser
    const user = await this.usermodel.findById( { _id })
    return res.status(200).json({ message: 'done', user })
}
}