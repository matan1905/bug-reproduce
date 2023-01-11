import { Module } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { AnswersController } from "./answers.controller";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Answer } from "./entities/answer.entity";
import { Question } from "../questions/entities/question.entity";

@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([Answer, Question])],
  controllers: [AnswersController],
  providers: [AnswersService]
})
export class AnswersModule {
}
