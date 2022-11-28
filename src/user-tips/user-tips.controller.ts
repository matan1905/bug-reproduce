import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { CreateUserTipDto } from "./dto/create-user-tip.dto";
import { UpdateUserTipDto } from "./dto/update-user-tip.dto";

@Controller("user-tips")
export class UserTipsController {
  constructor(private readonly userTipsService: UserTipsService) {
  }

  @Post()
  create(@Body() createUserTipDto: CreateUserTipDto) {
    return this.userTipsService.create(createUserTipDto);
  }

  @Get()
  findAll() {
    return this.userTipsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userTipsService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserTipDto: UpdateUserTipDto) {
    return this.userTipsService.update(+id, updateUserTipDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userTipsService.remove(+id);
  }
}
