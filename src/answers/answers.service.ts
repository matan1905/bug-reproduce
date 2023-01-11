import { Injectable } from "@nestjs/common";
import { Answer, AnswerParams } from "./entities/answer.entity";
import { Question } from "../questions/entities/question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AnswersService {
  constructor(@InjectRepository(Answer)
              private repo: Repository<Answer>,
              @InjectRepository(Question)
              private questionRepo: Repository<Question>) {
  }

  async create(questionId: string, userId: string, answerParams: AnswerParams) {

    const question: Question = await this.questionRepo.findOne({
      where: {
        id: questionId
      }
    });

    const answer = new Answer();
    answer.question = question;
    answer.type = question.type;
    answer.answer = answerParams;
    answer.userId = userId;
    return await this.repo.save(answer);
  }
}
