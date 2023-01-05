import { PartialType } from '@nestjs/mapped-types';
import { CreateTipsRequirementDto } from './create-tips-requirement.dto';

export class UpdateTipsRequirementDto extends PartialType(CreateTipsRequirementDto) {}
