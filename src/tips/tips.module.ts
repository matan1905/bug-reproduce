import { Module } from "@nestjs/common";
import { TipsService } from "./tips.service";
import { TipsController } from "./tips.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tip } from "./entities/tip.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports:[TypeOrmModule.forFeature([Tip]),AuthModule],
  controllers: [TipsController],
  providers: [TipsService]
})
export class TipsModule {
}
