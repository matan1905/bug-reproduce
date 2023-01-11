import { Question, QuestionType } from "../../questions/entities/question.entity";
import { CommonEntity } from "../../../lib/CommonEntity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";



type MultipleQuestionAnswerParams = {
  answerIndex: number,
}


type ScalarQuestionAnswerParams = {
  value: number;
}
export class AnswerParams {
  scalar: ScalarQuestionAnswerParams;
  multiple: MultipleQuestionAnswerParams;

}

@Entity()
export class Answer extends CommonEntity {
  @ManyToOne(()=>Question,{lazy:true})
  question: Question;

  @Column({type:'enum',enum:QuestionType, default:QuestionType.MULTIPLE})
  type: QuestionType;

  @Column(type => AnswerParams)
  answer: AnswerParams;

  @Column()
  userId:string
}
