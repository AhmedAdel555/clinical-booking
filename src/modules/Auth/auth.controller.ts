import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { authService } from './auth.service';
import { AuthGuard } from 'src/Guards/auth.guard';
import { SignUpDTO } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
import { Role } from 'src/decorators/roles.decorator';
import { RoleGuard } from 'src/Guards/role.guard';
import { SignUpAdminDTO } from './dto/signup-admin.dto';
import { SignUpAgentDTO } from './dto/signup-agent.dto';

@Controller({ path: '/auth' })
export class authController {

  constructor(private readonly signupService: authService) {}

  @Post('signup')
  async signUp(@Body() signUpDTO: SignUpDTO) {
    await this.signupService.signUp(signUpDTO);
    return { message: "User Successfully Created"};
  }

  @Post('signup/admin')
  async signUpAdmin(@Body() signUpDTO: SignUpAdminDTO, @Req() req) {
    await this.signupService.signUpAdmin(signUpDTO, req.user.id);
    return { message: "Admin Successfully Created"};
  }

  @Post('signup/agent')
  async signUpAgent(@Body() signUpDTO: SignUpAgentDTO,@Req() req) {
    await this.signupService.signUpAgent(signUpDTO, req.user.id);
    return { message: "Agent Successfully Created"};
  }

  @Post('login')
  async loginHandler(@Body() signInDto: SignInDto) {
    return await this.signupService.logIn(signInDto);
  }
}
