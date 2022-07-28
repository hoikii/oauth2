import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

import { AuthService } from './auth/auth.service'

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt_refresh') {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
      passReqToCallback: true,
    })
  }

  async validate(req: Request, payload) {
    const token = req.headers['authorization'].split('Bearer ')[1]
    const user = this.authService.findUserIfRefreshTokenMatches(payload.uid, token)
    if (user) {
      return user
    }
    throw new Error('Invalid JWT')
  }
}
