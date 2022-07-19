import { Controller, Get, Param, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse }  from 'axios'
import { INTRA_URL } from 'src/constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  auth(@Query('code') code: string) {
    const res = this.httpService.post(INTRA_URL +  '/oauth/token', {
      grant_type: 'authorization_code',
      cliend_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: 'http://localhost:3000/auth',
      code
    })
    res.subscribe((x) => {
      x.data.
      console.log(x.status)
    })
  }
}
