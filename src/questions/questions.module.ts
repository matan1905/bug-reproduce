import { Module } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { QuestionsController } from "./questions.controller";
import { AuthModule } from "../auth/auth.module";

/**
 * The questions module represent the question type, it holds all questions at a .
 */
@Module({
  imports:[AuthModule],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {
}
