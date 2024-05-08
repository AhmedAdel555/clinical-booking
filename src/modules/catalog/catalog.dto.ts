import { IsNotEmpty, IsString } from "class-validator";



export class catalogBodyDto{
    @IsString()
    @IsNotEmpty()
    catalog_name:string
}