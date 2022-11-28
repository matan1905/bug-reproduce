import { Tip } from "../../tips/entities/tip.entity";
import { User } from "../../users/entities/user.entity";
import { CommonEntity } from "../../../lib/CommonEntity";

export class UserTip extends CommonEntity{
  tip:Tip;
  user:User;
  // rating
  // took the action? asked a question about it? etc..
}
