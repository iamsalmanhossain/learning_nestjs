import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('this user is valid to go next.');
    next();
  }
}
