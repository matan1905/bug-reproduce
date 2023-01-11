import { Injectable } from '@nestjs/common';
import { CreateTipsRequirementDto } from './dto/create-tips-requirement.dto';
import { UpdateTipsRequirementDto } from './dto/update-tips-requirement.dto';
import { TipsRequirement } from "./entities/tips-requirement.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class TipsRequirementsService extends TypeOrmCrudService<TipsRequirement>{

  constructor( @InjectRepository(TipsRequirement) repo: Repository<TipsRequirement>,) {
    super(repo)
  }
}
