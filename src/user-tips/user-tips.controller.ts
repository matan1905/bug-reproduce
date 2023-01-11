import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, UseGuards } from "@nestjs/common";
import { UserTipsService } from "./user-tips.service";
import { AuthGuard } from "../auth/auth/auth.guard";
import { Crud, CrudAuth, CrudController, CrudRequest, Override, ParsedRequest } from "@nestjsx/crud";
import { UserTip } from "./entities/user-tip.entity";
import { User } from "../users/entities/user.entity";

@UseGuards(AuthGuard)
@Crud({
  model: { type:UserTip },
  routes:{
    only:[]
  },
  query:{
    join:{
      tip:{eager:true},
    }
  }
})
@CrudAuth({
  filter:(req)=>{
    return {'userId':req?.auth?.id}
  },
  persist: (req: any) => {
    return {
      userId: req?.auth?.id ?? undefined
    };
  }
})
@Controller("user-tips")
export class UserTipsController implements CrudController<UserTip>{
  constructor(public service: UserTipsService) {
  }

  get base(): CrudController<UserTip> {
    return this;
  }


  @Override()
  async getMany(
    @ParsedRequest() req: CrudRequest,
  ) {
    // todo - figure out why search = tip.type:{or:[1,2]  gives away all tips, and remove the filter fix
    const  result= (await this.base.getManyBase(req))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return { tips: result?.filter(tip=>tip.userId == req.parsed.authPersist.userId) };
  }

  @Put('like')
  async like(@Body() data: {like:boolean, tipId:string}){
    return this.service.like(data);
  }


}
