import { Controller, Get, UseGuards, Req, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { JwtRefreshGuard } from 'src/jwt_refresh.guard'
import { AuthService } from './auth.service';

@Controller('api/auth')
export class AuthController {
  constructor (
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Get('ft')
  @UseGuards(AuthGuard('ft'))
  async auth() {}

  @Get('ft/callback')
  @UseGuards(AuthGuard('ft'))
  async callback(@Req() req: any) {
    const { id, name } = req.user

    let uid
    const user = this.authService.findFtUser(id)
    if (user) {
      uid = user.id
    } else {
      const { refresh_token, access_token } = req.user
      this.authService.createFtUser(id, refresh_token, access_token)
      uid = this.authService.createUser(name)
    }
    const access = this.authService.createAccessToken(uid)
    const refresh = this.authService.createRefreshToken(uid)
    return {
      access_token: access,
      refresh_token: refresh,
    }
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  async refresh(@Req() req: any) {
    const uid = req.user.id
    // const uid = this.authService.findUserByRefreshToken(req).id
    return {
      access_token: this.authService.createAccessToken(uid),
    }
  }
}
