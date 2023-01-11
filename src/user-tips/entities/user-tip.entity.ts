import { Tip } from "../../tips/entities/tip.entity";
import { User } from "../../users/entities/user.entity";
import { CommonEntity } from "../../../lib/CommonEntity";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";


@Entity()
export class UserTip extends CommonEntity{

  @ManyToOne(()=>Tip,)
  tip:Tip;

  @Column()
  userId:string;

  @Column()
  isLiked:boolean;
}
