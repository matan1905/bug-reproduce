import { Question } from "../../questions/entities/question.entity";
import { CommonEntity } from "../../../lib/CommonEntity";

enum ScalarOverflow {
  PLUS,
  NONE,
  MINUS,

}

type MultipleQuestionAnswerParams = {
  answerIndex: number,
}


type ScalarQuestionAnswerParams = {
  value: number;
  overflow: ScalarOverflow;
}
type AnswerParams = ScalarQuestionAnswerParams | MultipleQuestionAnswerParams;

export class Answer extends CommonEntity {
  question: Question;
  answer: AnswerParams;
}
