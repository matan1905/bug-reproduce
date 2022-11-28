import { Injectable } from "@nestjs/common";
import { CreateUserTipDto } from "./dto/create-user-tip.dto";
import { UpdateUserTipDto } from "./dto/update-user-tip.dto";

@Injectable()
export class UserTipsService {
  create(createUserTipDto: CreateUserTipDto) {
    return "This action adds a new userTip";
  }

  findAll() {
    return `This action returns all userTips`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userTip`;
  }

  update(id: number, updateUserTipDto: UpdateUserTipDto) {
    return `This action updates a #${id} userTip`;
  }

  remove(id: number) {
    return `This action removes a #${id} userTip`;
  }
}
