import { Body, Controller, Post, Res, UsePipes } from "@nestjs/common";
import { permisionServices } from "./permisions.service";
import { Response } from "express";
import { permBodyDto, permScehma } from "./perm.validationSchema";
import { ZodValidationPipe } from "src/pipes/validation.pipe";




@Controller({path:'perm'})
export class permController{
    constructor(private readonly permServices:permisionServices){}
    @Post('addperm')
    @UsePipes(new ZodValidationPipe(permScehma))
    addperm(@Body() body:permBodyDto ,@Res() res: Response){
        return this.permServices.addPermission(body,res)
    }
}