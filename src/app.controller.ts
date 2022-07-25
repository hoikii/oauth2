import { Controller, Get, Redirect, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import  { OAUTH_URL } from './constants'

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  whoAmI(@Req() req) {
    const { name } = req.user
    return name
  }
}
