import { Module } from "@nestjs/common";
import { Models } from "src/DB/Schemas/models.generations";
import { catalogController } from "./catalog.controller";
import { catsrvice } from "./catalog.service";
import { JwtService } from "@nestjs/jwt";



@Module({
    imports:[Models],
    controllers:[catalogController],
    providers:[catsrvice,JwtService]
})
export class catModule{}