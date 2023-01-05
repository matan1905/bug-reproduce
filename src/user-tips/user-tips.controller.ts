import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseGuards } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { CreateUserTipDto } from "./dto/create-user-tip.dto";
import { UpdateUserTipDto } from "./dto/update-user-tip.dto";
import { AuthGuard } from "../auth/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("user-tips")
export class UserTipsController {
  constructor(private readonly userTipsService: UserTipsService) {
  }


  @Get()
  findAll() {
    return this.userTipsService.findAll();
  }


  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserTipDto: UpdateUserTipDto) {
    return this.userTipsService.update(id, updateUserTipDto);
  }

  @Put("like")
  like(@Body() body: { tipId:string,like:boolean }) {
    console.log(body);
    return this.userTipsService.update(body.tipId, { isLiked:body.like });
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userTipsService.remove(id);
  }
}
