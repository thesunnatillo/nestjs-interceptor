import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return { message: 'Hello World!', message2: 'Goodbye World!' };
  }
}
