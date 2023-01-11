import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import { AuthGuard } from "../auth/auth/auth.guard";
import { CreateAnswerDto } from "./dto/create-answer.dto";

@UseGuards(AuthGuard)
@Controller("answers")
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {
  }

  @Post()
  async create(@Body() createAnswerDto:  CreateAnswerDto, @Req() req) {
    return this.answersService.create(createAnswerDto.questionId,req.auth.id,createAnswerDto.answer);
  }
}
