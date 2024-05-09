import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { authModule } from './modules/Auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { orgModule } from './modules/Organizations/organization.module';
import { catModule } from './modules/catalog/catalog.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ MongooseModule.forRoot("mongodb://localhost:27017/clinical_booking") ,authModule ,orgModule,catModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
