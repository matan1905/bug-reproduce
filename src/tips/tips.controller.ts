import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { TipsService } from "./tips.service";
import { CreateTipDto } from "./dto/create-tip.dto";
import { UpdateTipDto } from "./dto/update-tip.dto";
import { AdminAuthGuard } from "../auth/auth/admin-auth.guard";
import { Tip } from "./entities/tip.entity";
import { Crud, CrudController } from "@nestjsx/crud";

@UseGuards(AdminAuthGuard)
@Crud({
  model: {
    type: Tip,
  },
})
@Controller("tips")
export class TipsController implements CrudController<Tip>{
  constructor(public service: TipsService) {
  }
}
