import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";

/**
 * The questions module represent the question type, it holds all questions at a .
 */
@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {
}
