import { Module } from '@nestjs/common';
import { TipsRequirementsService } from './tips-requirements.service';
import { TipsRequirementsController } from './tips-requirements.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipsRequirement } from "./entities/tips-requirement.entity";
import { AuthModule } from "../auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([TipsRequirement]),AuthModule],
  controllers: [TipsRequirementsController],
  providers: [TipsRequirementsService]
})
export class TipsRequirementsModule {}
