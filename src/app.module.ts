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
import { TypeOrmModule } from "@nestjs/typeorm";
import { Answer } from "./answers/entities/answer.entity";
import { Question } from "./questions/entities/question.entity";
import { TipsRequirement } from "./tips-requirements/entities/tips-requirement.entity";
import { User } from "./users/entities/user.entity";
import { Tip } from "./tips/entities/tip.entity";
import { UserTip } from "./user-tips/entities/user-tip.entity";

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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'astroloid',synchronize: true,
      entities: [Answer, Question,TipsRequirement,User,Tip,UserTip],
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
