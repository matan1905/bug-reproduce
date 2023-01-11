import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { QuestionsService } from "./questions.service";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";
import { AuthGuard } from "../auth/auth/auth.guard";
import { Crud, CrudController, CrudRequest, Override, ParsedRequest } from "@nestjsx/crud";
import { Question } from "./entities/question.entity";

@UseGuards(AuthGuard)
@Crud({
  model: { type:Question },
  routes:{
    only:["getManyBase"]
  }
})
@Controller("questions")
export class QuestionsController implements CrudController<Question>{
  constructor(public service: QuestionsService) {
  }

  get base(): CrudController<Question> {
    return this;
  }

  @Override()
  async getMany(
    @ParsedRequest() req: CrudRequest,
  ) {
    return { questions: (await this.base.getManyBase(req)) };
  }

}
