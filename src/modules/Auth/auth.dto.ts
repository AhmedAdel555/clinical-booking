import {
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IS_NUMBER,
  IS_BOOLEAN,
  IsBoolean,
} from 'class-validator';

// dto, signup , body
export class signupBodyDto {
  @IsNumber()
  NationalId: number;
  @IsNumber()
  phone: number;
  @IsString()
  @MinLength(3, {
    message: 'your name must be at least 3 chars',
  })
  @MaxLength(10, {
    message: 'your name mustnot exceed 10 chars',
  })
  username: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
  @IsString()
  @IsNotEmpty()
  confirm_password: string;
  @IsBoolean()
  status:boolean;
 // @IsNotEmpty()
  //permission:Permissions

}
