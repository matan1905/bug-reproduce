import { PartialType, PickType } from "@nestjs/mapped-types";
import { Answer } from "../entities/answer.entity";

export class CreateAnswerDto extends PickType(Answer,['answer'] as const){
  questionId: string;
}
