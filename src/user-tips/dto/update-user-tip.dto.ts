import { PartialType } from "@nestjs/mapped-types";
import { CreateUserTipDto } from "./create-user-tip.dto";

export class UpdateUserTipDto extends PartialType(CreateUserTipDto) {
}
