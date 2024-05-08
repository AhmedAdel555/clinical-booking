import { IsNotEmpty, IsString } from "class-validator";
export class permBodyDto{
    @IsNotEmpty()
    @IsString()
    role:string
}
