import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service';
import { LoggingInterceptor } from "./interceptors/logging.interceptor";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hi')
  @UseInterceptors(LoggingInterceptor) // Endpoint daraja
  getHello(): object {
    return this.appService.getHello();
  }
}
