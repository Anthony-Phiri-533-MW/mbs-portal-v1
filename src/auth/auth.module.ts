import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MagicLoginStrategy } from './magiclogin.strategy';
import { UsersService } from 'src/users/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, MagicLoginStrategy, /*UsersService*/]
})
export class AuthModule {}
