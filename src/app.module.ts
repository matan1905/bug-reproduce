import { Global, Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { TipsModule } from "./tips/tips.module";
import { UserTipsModule } from "./user-tips/user-tips.module";
import { JwtModule } from "@nestjs/jwt";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth/auth/auth.guard";
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/entities/user.entity";
import { Tip } from "./tips/entities/tip.entity";
import { UserTip } from "./user-tips/entities/user-tip.entity";

@Module({
  imports: [
    UsersModule,
    TipsModule,
    UserTipsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 55000,
      username: 'postgres',
      password: 'postgrespw',
      database: 'astroloid',synchronize: true,
      entities: [User,Tip,UserTip],
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
