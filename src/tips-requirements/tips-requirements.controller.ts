import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { TipsRequirementsService } from './tips-requirements.service';
import { CreateTipsRequirementDto } from './dto/create-tips-requirement.dto';
import { UpdateTipsRequirementDto } from './dto/update-tips-requirement.dto';
import { AdminAuthGuard } from "../auth/auth/admin-auth.guard";
import { TipsRequirement } from "./entities/tips-requirement.entity";
import { Crud, CrudController } from "@nestjsx/crud";

@UseGuards(AdminAuthGuard)
@Crud({
  model: {
    type: TipsRequirement,
  },
})
@Controller('tips-requirements')
export class TipsRequirementsController implements CrudController<TipsRequirement>{
  constructor(public service: TipsRequirementsService) {}
}
