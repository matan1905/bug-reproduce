import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class CommonEntity {
  @PrimaryGeneratedColumn("uuid")
  id : string;

  @CreateDateColumn()
  createdAt: Date;
}