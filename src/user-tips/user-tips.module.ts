import { Module } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { UserTipsController } from "./user-tips.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserTip } from "./entities/user-tip.entity";

@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([UserTip])],
  controllers: [UserTipsController],
  providers: [UserTipsService]
})
export class UserTipsModule {
}
