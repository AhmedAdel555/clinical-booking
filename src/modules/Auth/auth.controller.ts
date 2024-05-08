import {
  Body,
  Controller,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { authService } from './auth.service';
import { Request, Response } from 'express';
import { AuthGuard } from 'src/Guards/auth.guards';
import { ZodValidationPipe } from 'src/pipes/validation.pipe';
import { signUpScehma } from './auth.validationSchema';
import { signupBodyDto } from './auth.dto';

@Controller({ path: '/auth' })
export class authController {
  constructor(private readonly signupService: authService) {}

  @Post('signup')
  @UsePipes(new ZodValidationPipe(signUpScehma))
  signUp(@Body() body: signupBodyDto, @Res() res: Response): Promise<object> {
    return this.signupService.signUp(body, res);
  }
  //log in handler

  @Post('login')
  loginHandler(@Body() body: any, @Res() res: Response) {
    return this.signupService.LogInService(body, res);
  }
  @Put('getuser')
  @UseGuards(AuthGuard)
  getUserDataServic(@Req() req: Request, @Res() res: Response) {
    return this.signupService.getUserDataServic(req, res);
  }
}
