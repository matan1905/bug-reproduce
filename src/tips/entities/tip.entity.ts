import { CommonEntity } from "../../../lib/CommonEntity";
import { TipsRequirement } from "../../tips-requirements/entities/tips-requirement.entity";
import { Column, Entity, OneToMany } from "typeorm";

enum TipType {
  Info = "Info",
  Activity = "Activity",
  Resource = "Resource",
  Inspiration = "Inspiration",
  Connection = "Connection",
}

@Entity()
export class Tip extends CommonEntity {
  @Column({type:'enum',enum:TipType, default:TipType.Info})
  type: TipType;
  @Column()
  content: string;
  @OneToMany(()=>TipsRequirement,tipReq=>tipReq.tip ,{lazy:true})
  requirements: TipsRequirement[];
}
