import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QuestionsModule } from "./questions/questions.module";
import { AnswersModule } from "./answers/answers.module";
import { UsersModule } from "./users/users.module";
import { TipsModule } from "./tips/tips.module";
import { UserTipsModule } from "./user-tips/user-tips.module";
import { SuggestionSystemModule } from "./suggestion-system/suggestion-system.module";

@Module({
  imports: [
    QuestionsModule,
    AnswersModule,
    UsersModule,
    TipsModule,
    UserTipsModule,
    SuggestionSystemModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
