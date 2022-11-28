import { Test, TestingModule } from "@nestjs/testing";
import { UserTipsService } from "./user-tips.service";

describe("UserTipsService", () => {
  let service: UserTipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserTipsService]
    }).compile();

    service = module.get<UserTipsService>(UserTipsService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
