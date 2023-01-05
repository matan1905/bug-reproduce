import { Injectable, UseGuards } from "@nestjs/common";
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { AuthGuard } from "../auth/auth/auth.guard";

@UseGuards(AuthGuard)
@Injectable()
export class QuestionsService {
  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  findAll() {
    return {
      questions: [
        {
          id:'1',
          text: 'What are your fitness goals?',
          type: 'MULTIPLE',
          params: {
            answers: [
              { text: 'Increase muscle mass' },
              { text: "Lose weight" },
              { text: 'Gain weight' },
              { text: 'None of the above' },
            ],
          },
        },
        {
          id:'2',
          text: 'How many cups of coffee do you usually drink every day?',
          type: 'MULTIPLE',
          params: {
            answers: [
              { text: "I don't drink coffee" },
              { text: '1-2' },
              { text: '3-4' },
              { text: '5+' },
            ],
          },
        },
        // {
        //   id:'2',
        //   text: 'How much hours do you spend on video games each day?',
        //   type: 'SCALAR',
        //   params: {
        //     min: 0,
        //     max: 8,
        //     maxWithPlus: true,
        //     minWithMinus: false,
        //   },
        // },
        // {
        //   id:'3',
        //   text: 'What time do you usually wake up?',
        //   type: 'TIME',
        //   params: {},
        // },
        // {
        //   id:'4',
        //   text: 'Where do you spend the majority of your time?',
        //   type: 'LOCATION',
        //   params: {},
        // },
      ],
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
