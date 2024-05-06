import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './modules/Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { orgModule } from './modules/Organizations/organization.module';

@Module({
  imports: [ MongooseModule.forRoot("mongodb+srv://mongo_user:Ahmed123456@cluster0.0abffrs.mongodb.net/") ,authModule ,orgModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
