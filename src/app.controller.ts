import { Controller, Get, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

import  { OAUTH_URL } from './constants'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect(OAUTH_URL, 302)
  whoAmI() {}
}
