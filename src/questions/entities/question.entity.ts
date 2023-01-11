import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from '../../../lib/CommonEntity';

export enum QuestionType {
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

@Entity()
export class Question extends CommonEntity {
  @Column()
  text: string; // title

  @Column({type:"simple-json"})
  params: QuestionParams;

  @Column({type:'enum',enum:QuestionType, default:QuestionType.MULTIPLE})
  type: QuestionType;
  //repeat: QuestionRepeat;
}
