import { Test, TestingModule } from "@nestjs/testing";
import { UserTipsController } from "./user-tips.controller";
import { UserTipsService } from "./user-tips.service";

describe("UserTipsController", () => {
  let controller: UserTipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserTipsController],
      providers: [UserTipsService]
    }).compile();

    controller = module.get<UserTipsController>(UserTipsController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
