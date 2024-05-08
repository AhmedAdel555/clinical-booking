import { Body, Controller, Get, Post, Req, Res, UseGuards, UsePipes } from "@nestjs/common";
import { catsrvice } from "./catalog.service";
import { Request, Response } from "express";
import { catalogBodyDto } from "./catalog.dto";
import { ZodValidationPipe } from "src/pipes/validation.pipe";
import { catSchema } from "./catalog.validationschema";
import { AuthGuard } from "src/Guards/auth.guards";



@Controller({path:'catalog'})

export class catalogController{
    constructor(private readonly catalogService:catsrvice){}
    ////======catalog route
    @Post('addcatalog')
    
    @UsePipes(new ZodValidationPipe(catSchema))
    @UseGuards(AuthGuard)
    addCatalog(@Body() body:catalogBodyDto  , @Req() req :Request, @Res() res:Response){
        return this.catalogService.addCatalog(body,req,res)
    }
    /////////get all catalogs route 
    @Get('getall')
    getallCatalog(@Body() body:any ,   @Res() res:Response){
        return this.catalogService.getAllCatalog(body,res)
    }
}
