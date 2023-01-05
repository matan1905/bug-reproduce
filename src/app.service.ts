import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomUUID } from "crypto";
import { AuthService } from "./auth/auth/auth.service";

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {
    //
  }
  getHello(): string {
    return 'Hello World!';
  }

  getJwt():string{
    const uuid = randomUUID()
    return this.authService.sign({
      id:uuid,
    });
  }
}
