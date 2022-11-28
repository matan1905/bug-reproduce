import { Column } from "typeorm";

export class CommonEntity {
  @Column()
  createdAt: Date;
}