import { Controller, Get, Param, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Controller('auth')
export class AuthController {
  constructor(private readonly httpService: HttpService) {}

  @Get()
  auth(@Query('code') code: string) : string {
    
  }
}
