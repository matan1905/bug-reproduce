import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from './auth/auth.service';

@Module({

  imports:[ JwtModule.register({
    secret: process.env['jwt_secret'] ?? 'jwt-secret',
  }),],

  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
