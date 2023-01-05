import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

  constructor(private jwtService:JwtService) {}

  sign(payload: any) {
    return this.jwtService.sign(payload);
  }

  verify(arg0: any): any {
    return this.jwtService.verify(arg0);
  }
}
