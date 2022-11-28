import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { UpdateQuestionDto } from "./dto/update-question.dto";

@Injectable()
export class QuestionsService {
  create(createQuestionDto: CreateQuestionDto) {
    return "This action adds a new question";
  }

  findAll() {
    return {
      questions: [
        {
          text: "How many cups of coffee do you usually drink every day?",
          type: "MULTIPLE",
          params: {
            answers: [
              { text: "I don't drink coffee" },
              { text: "1" },
              { text: "2" },
              { text: "3" },
              { text: "4+" }
            ]
          }
        },
        {
          text: "How much hours do you spend on video games each day?",
          type: "SCALAR",
          params: {
            min: 0,
            max: 8,
            maxWithPlus: true,
            minWithMinus: false
          }
        },
        {
          text: "What time do you usually wake up?",
          type: "TIME",
          params: {}
        },
        {
          text: "Where do you spend the majority of your time?",
          type: "LOCATION",
          params: {}
        }
      ]
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
