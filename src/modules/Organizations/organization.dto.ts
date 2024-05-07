import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class organizationBodyDto {
  @IsString()
  @MinLength(3, {
    message: 'your name must be at leaset 3 chars',
  })
  @MaxLength(10, {
    message: 'your name mustnot exceed 10 chars',
  })
  name: string;

  @IsNumber()
  id: number;
  @IsNumber()
  License_ID: number;
  @IsString()
  @IsEnum(['online', 'offline'])
  @IsOptional()
  Org_Status: string;
  @IsEnum(['Banking', 'Finance', 'Wholesale'])
  @IsOptional()
  Organization_Type: string;
  @IsNumber()
  @IsOptional()
  Financial_Limit_From: number;

  @IsNumber()
  @IsOptional()
  Financial_Limit_TO: number;

  @IsNumber()
  @IsOptional()
  Bank_account: number;
  @IsString()
  @IsOptional()
  Organization_Attachements: string;
}
