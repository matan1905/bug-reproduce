import { CommonEntity } from "../../../lib/CommonEntity";

enum TipType{
  YSK,TODO,TAKE_ACTION
}

export class Tip extends CommonEntity{
  text: string;
  type:TipType;

}
