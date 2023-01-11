import { Injectable } from "@nestjs/common";
import { CreateUserTipDto } from "./dto/create-user-tip.dto";
import { UpdateUserTipDto } from "./dto/update-user-tip.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserTip } from "./entities/user-tip.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { Question } from "../questions/entities/question.entity";
import { CrudRequest } from "@nestjsx/crud";

@Injectable()
export class UserTipsService  extends TypeOrmCrudService<UserTip>{

  constructor(@InjectRepository(UserTip) repo: Repository<UserTip>,) {
    super(repo)
  }

  findAll() {
    return {
      tips:[ // The tip is a foreign reference that is being injected
        {
          id:"1",
          isLiked:false,
          createdAt: new Date().toISOString(),
          tip:{
            id:"a",
            type:"Connection",
            content:`## Connect with a potential partner
  Astroloid has found someone you have a lot in common with.
   Take the next step and chat with them to see if there's a connection!
  
  [Click here to start chatting!](https://duckduckgo.com)
  
  
  
  ![The San Juan Mountains are beautiful!](https://images.unsplash.com/photo-1601288496920-b6154fe3626a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=256&w=256&q=80)
 `
          }
        },

        {
          id:"2",
          isLiked:true,
          createdAt: '2022-12-02T20:36:03Z',
          tip:{
            id:"b",
            type:"Info",
            content:`## Welcome to astroloid!
Astroloid is still in its beta phase, and we are committed to creating the best possible app.
If you encounter any bugs, have any suggestions, or have any questions,
please [Click here](astroloid://feedback?) to send us your feedback. 

We value your input and appreciate your help in improving Astroloid.`
          }
        }
      ]
  };
  }

  async like(data:{ like: boolean; tipId: string }) {
    await this.repo.update({id:data.tipId},{isLiked:data.like})
  }

}
