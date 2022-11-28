import { Column, Entity } from "typeorm";
import { CommonEntity } from "../../../lib/CommonEntity";

@Entity()
export class User extends CommonEntity {
  @Column()
  identifier: string;

  @Column({nullable:true})
  email: string;
}
