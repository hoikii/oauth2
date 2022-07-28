import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { FtStrategy } from './ft.strategy'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'
import { JwtRefreshStrategy } from 'src/jwt_refresh.strategy'

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '120s' },
    }),
  ],
  controllers: [AuthController],
  providers: [FtStrategy, AuthService, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
