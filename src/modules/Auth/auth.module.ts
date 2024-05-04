import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { authService } from './auth.service';
import { Models } from 'src/DB/Schemas/models.generations';
import {  JwtService } from '@nestjs/jwt';

@Module({
  imports: [Models],
  controllers: [authController],
  providers: [authService , JwtService],
})
export class authModule {}
