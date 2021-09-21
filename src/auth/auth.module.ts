import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([User]),
    PassportModule,
    UsersModule,
  ],
  providers: [AuthService, LocalStrategy],
  controllers:[AuthController]
})
export class AuthModule {}
