import { Controller, Request, Post, UseInterceptors } from '@nestjs/common';

import { LoggingInterceptor } from './logging.interceptor';

@Controller('auth')
export class AppController {
  @UseInterceptors(LoggingInterceptor)
  @Post('/login')
  async login(@Request() req) {
    return req.user;
  }
}
