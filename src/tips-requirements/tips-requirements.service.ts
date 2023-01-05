import { Injectable } from '@nestjs/common';
import { CreateTipsRequirementDto } from './dto/create-tips-requirement.dto';
import { UpdateTipsRequirementDto } from './dto/update-tips-requirement.dto';

@Injectable()
export class TipsRequirementsService {
  create(createTipsRequirementDto: CreateTipsRequirementDto) {
    return 'This action adds a new tipsRequirement';
  }

  findAll() {
    return `This action returns all tipsRequirements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipsRequirement`;
  }

  update(id: number, updateTipsRequirementDto: UpdateTipsRequirementDto) {
    return `This action updates a #${id} tipsRequirement`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipsRequirement`;
  }
}
