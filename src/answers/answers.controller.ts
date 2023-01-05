import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { AnswersService } from "./answers.service";
import { UpdateAnswerDto } from "./dto/update-answer.dto";
import { AuthGuard } from "../auth/auth/auth.guard";

@UseGuards(AuthGuard)
@Controller("answers")
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {
  }

  @Post()
  create(@Body() createAnswerDto: any /*CreateAnswerDto*/) {
    return this.answersService.create(createAnswerDto);
  }

  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.answersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateAnswerDto: UpdateAnswerDto) {
    return this.answersService.update(+id, updateAnswerDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.answersService.remove(+id);
  }
}
