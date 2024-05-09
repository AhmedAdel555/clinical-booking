import {
  Body,
  Controller,
  Post,
  UseGuards,
} from '@nestjs/common';
import { authService } from './auth.service';
import { AuthGuard } from 'src/Guards/auth.guard';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { Role } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/Guards/role.guard';

@Controller({ path: '/auth' })
export class authController {
  constructor(private readonly signupService: authService) {}


  @Post('signup')
  async signUp(@Body() signUpDTO: SignUpDto) {
    await this.signupService.signUp(signUpDTO, "User");
    return { message: "User Successfully Created"};
  }

  @Role('Super Admin')
  @UseGuards(AuthGuard, RoleGuard)
  @Post('signup/admin')
  async signUpAdmin(@Body() signUpDTO: SignUpDto) {
    await this.signupService.signUp(signUpDTO, "Admin");
    return { message: "User Successfully Created"};
  }

  @Post('login')
  async loginHandler(@Body() signInDto: SignInDto) {
    return await this.signupService.logIn(signInDto);
  }
}
