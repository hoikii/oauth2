import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  whoAmI(): Object {
    return 'Hello World!';
  }
}

// /auth/ft/oauth로그인창 => /auth/ft/callback => 토큰 + user 정보로 User에 저장 + FtOauth에도 토큰 저장 이후 jwt 발급
