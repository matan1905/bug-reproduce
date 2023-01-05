import { Module } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { UserTipsController } from "./user-tips.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports:[AuthModule],
  controllers: [UserTipsController],
  providers: [UserTipsService]
})
export class UserTipsModule {
}
