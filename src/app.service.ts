import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  whoAmI(): Object {
    return 'Hello World!';
  }
}
