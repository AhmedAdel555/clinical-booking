import { IsMongoId, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAgentDTO {

  @IsMongoId()
  serviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string

  @IsNumber()
  @IsNotEmpty()
  mobile: number

  @IsString()
  @IsNotEmpty()
  email: string

  @IsNotEmpty()
  cash_acceptance: boolean;
  
  available_dates: Date[]
}