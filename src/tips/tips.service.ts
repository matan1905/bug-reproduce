import { Injectable } from "@nestjs/common";
import { Tip } from "./entities/tip.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";

@Injectable()
export class TipsService extends TypeOrmCrudService<Tip>{
  constructor(  @InjectRepository(Tip) repo: Repository<Tip>,) {
    super(repo);
  }
}
