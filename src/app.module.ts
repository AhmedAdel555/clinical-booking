import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './modules/Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { orgModule } from './modules/Organizations/organization.module';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://127.0.0.1/Clinical_Booking') ,authModule ,orgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
