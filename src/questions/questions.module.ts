import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";
import { AuthModule } from "../auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./entities/question.entity";

/**
 * The questions module represent the question type, it holds all questions at a .
 */
@Module({
  imports:[AuthModule,TypeOrmModule.forFeature([Question])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {
}
