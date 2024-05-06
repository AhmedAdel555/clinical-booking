import {
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsEnum,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';

// dto, signup , body
export class signupBodyDto {
  @IsString()
  @MinLength(3, {
    message: 'your name must be at least 3 chars',
  })
  @MaxLength(10, {
    message: 'your name mustnot exceed 10 chars',
  })
  name: string;

  @IsString()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  age: number;

  @IsString()
  @IsEnum(['female', 'male'])
  @IsOptional()
  gender: string;
}
