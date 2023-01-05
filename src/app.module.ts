import { Global, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QuestionsModule } from "./questions/questions.module";
import { AnswersModule } from "./answers/answers.module";
import { UsersModule } from "./users/users.module";
import { TipsModule } from "./tips/tips.module";
import { UserTipsModule } from "./user-tips/user-tips.module";
import { SuggestionSystemModule } from "./suggestion-system/suggestion-system.module";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth/auth/auth.guard";
import { AuthModule } from './auth/auth.module';
import { TipsRequirementsModule } from './tips-requirements/tips-requirements.module';

@Module({
  imports: [
    QuestionsModule,
    AnswersModule,
    UsersModule,
    TipsModule,
    UserTipsModule,
    SuggestionSystemModule,
    AuthModule,
    TipsRequirementsModule,
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
