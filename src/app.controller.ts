import { Controller, Request, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoggingInterceptor } from './logging.interceptor';

@Controller('auth')
export class AppController {
    @UseInterceptors(LoggingInterceptor)  
    @Post('/login')
    async login(@Request() req) {
      return req.user;
    }
}