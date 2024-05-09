import { Body, Controller, Get, Post, Req, Res, UseGuards, UsePipes } from "@nestjs/common";
import { catsrvice } from "./catalog.service";
import { Request, Response } from "express";
import { CatalogBodyDto } from "./dto/catalog.dto";
import { AuthGuard } from "src/Guards/auth.guard";
import { RoleGuard } from "src/Guards/role.guard";
import { Role } from "src/decorators/roles.decorator";



@Controller('catalog')
export class catalogController{

    constructor(private readonly catalogService:catsrvice){}

    @Role("Super Admin")
    @UseGuards(AuthGuard, RoleGuard)
    @Post()
    async createCatalog(@Body() catalogBodyDto:CatalogBodyDto){
        await this.catalogService.createCatalog(catalogBodyDto)
        return {message: "Catalog added Successfully"}
    }

    @Get()
    async findAll(){
      return await this.catalogService.findAll()
    }
}
