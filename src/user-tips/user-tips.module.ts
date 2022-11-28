import { Module } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { UserTipsController } from "./user-tips.controller";

@Module({
  controllers: [UserTipsController],
  providers: [UserTipsService]
})
export class UserTipsModule {
}
