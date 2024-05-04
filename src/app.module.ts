import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './modules/Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ MongooseModule.forRoot('mongodb://127.0.0.1/Clinical_Booking') ,authModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
