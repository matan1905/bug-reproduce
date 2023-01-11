import { Column, Entity, OneToMany } from "typeorm";
import { CommonEntity } from "../../../lib/CommonEntity";
import { UserTip } from "../../user-tips/entities/user-tip.entity";

@Entity()
export class User extends CommonEntity {
  @Column({nullable:true})
  identifier: string;

  @Column({nullable:true})
  email: string;

  @Column({default:true})
  isActive: boolean;


}
