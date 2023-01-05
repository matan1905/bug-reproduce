import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipsRequirementsService } from './tips-requirements.service';
import { CreateTipsRequirementDto } from './dto/create-tips-requirement.dto';
import { UpdateTipsRequirementDto } from './dto/update-tips-requirement.dto';

@Controller('tips-requirements')
export class TipsRequirementsController {
  constructor(private readonly tipsRequirementsService: TipsRequirementsService) {}

  @Post()
  create(@Body() createTipsRequirementDto: CreateTipsRequirementDto) {
    return this.tipsRequirementsService.create(createTipsRequirementDto);
  }

  @Get()
  findAll() {
    return this.tipsRequirementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipsRequirementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipsRequirementDto: UpdateTipsRequirementDto) {
    return this.tipsRequirementsService.update(+id, updateTipsRequirementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipsRequirementsService.remove(+id);
  }
}
