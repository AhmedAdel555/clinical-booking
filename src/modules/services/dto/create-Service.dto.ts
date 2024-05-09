import { IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateServiceDTO{

  @IsMongoId()
  organizationId: String;

  @IsMongoId()
  catalog_id: string;

  @IsString()
  @IsNotEmpty()
  service_name: string;

  @IsString()
  @IsNotEmpty()
  service_description: string;

  @IsNumber()
  @IsNotEmpty()
  service_fees_amount: number;

  @IsNumber()
  @IsNotEmpty()
  service_fees_description: string
}