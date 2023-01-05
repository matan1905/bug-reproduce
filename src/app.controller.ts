import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AppService } from './app.service';
import { AuthGuard } from "./auth/auth/auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('feedback')
  sendFeedback(@Body() feedback) {
    console.log(feedback);
    return this.appService.getHello();
  }

  @Get('refreshToken')
  refreshToken(){
    return this.appService.getJwt();
  }
}
