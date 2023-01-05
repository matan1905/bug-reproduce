import { Module } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { AnswersController } from "./answers.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports:[AuthModule],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule {
}
