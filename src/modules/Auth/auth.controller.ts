import { Body, Controller, Post, Put, Req, Res, UseGuards } from "@nestjs/common";
import { authService } from "./auth.service";
import { Request, Response } from "express";
import { AuthGuard } from "src/Guards/auth.guards";

@Controller({ path: '/auth' })
export class authController{
    constructor(
        private readonly signupService :authService
    ){}
    @Post('signup')
    signUp( 
        @Req() req:Request ,
        @Res() res:Response    
    ){
     return this.signupService.signUp(req , res)
    }
    //log in handler 
   @Post('login')
   loginHandler(@Body() body:any ,
      @Res() res :Response

){
    return this.signupService.LogInService(body,res)
}
@Put('changepass')
@UseGuards(AuthGuard)
getUserDataServic(
    @Req() req:Request ,
      @Res() res :Response
){
 return this.signupService.getUserDataServic(req,res)
}
}