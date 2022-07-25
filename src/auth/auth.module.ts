import { Module } from '@nestjs/common'
import { AuthController } from './auth.controller'
import { FtStrategy } from './ft.strategy'
import { AuthService } from './auth.service'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '600s' },
    })
  ],
  controllers: [AuthController],
  providers: [FtStrategy, AuthService],
  exports: [AuthService],
})

export class AuthModule {}
