import { CommonEntity } from '../../../lib/CommonEntity';

enum QuestionType {
  MULTIPLE = 'MULTIPLE',
  // LOCATION='LOCATION',
  // DATE='DATE',
  // TIME='TIME',
  SCALAR = 'SCALAR',
}

type MultipleQuestionParams = {
  answers: { text: string }[];
};

type ScalarQuestionParams = {
  min: number;
  max: number;
  canPlusOverflow: boolean;
  canMinusOverflow: boolean;
};
enum QuestionRepeat {
  NEVER = -1, // archived questions & question lines
  ONCE,
  DAILY,
  WEEKLY,
  MONTHLY,
  QUARTERLY,
  YEARLY,
}
type QuestionParams = MultipleQuestionParams | ScalarQuestionParams;

export class Question extends CommonEntity {
  text: string;
  params: QuestionParams;
  type: QuestionType;
  repeat: QuestionRepeat;
}
