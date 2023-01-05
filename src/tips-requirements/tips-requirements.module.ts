import { Module } from '@nestjs/common';
import { TipsRequirementsService } from './tips-requirements.service';
import { TipsRequirementsController } from './tips-requirements.controller';

@Module({
  controllers: [TipsRequirementsController],
  providers: [TipsRequirementsService]
})
export class TipsRequirementsModule {}
