import { Module } from "@nestjs/common";
import { Models } from "src/DB/Schemas/models.generations";
import { permisionServices } from "./permisions.service";
import { JwtService } from "@nestjs/jwt";
import { permController } from "./permisions.controller";




@Module({
    imports:[Models],
    controllers:[permController],
    providers:[permisionServices ,JwtService]
})
export class perModule{}