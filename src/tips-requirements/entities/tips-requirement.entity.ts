import { Tip } from "../../tips/entities/tip.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { QuestionType } from "../../questions/entities/question.entity";
import { CommonEntity } from "../../../lib/CommonEntity";

type MultiChoiceRequirements = {
  answerIndex: number,
}


type ScalarRequirements = {
  value: number;
}
class Requirements {
  scalar: ScalarRequirements;
  multiple: MultiChoiceRequirements;

}

@Entity()
export class TipsRequirement  extends CommonEntity{

  @ManyToOne(()=>Tip)
  tip:Tip;
  @Column({type:'enum',enum:QuestionType, default:QuestionType.MULTIPLE})
  type: QuestionType;

  @Column(() => Requirements)
  requirement: Requirements;
}
