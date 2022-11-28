import { Test, TestingModule } from "@nestjs/testing";
import { SuggestionServiceService } from "./suggestion.service.service";

describe("SuggestionServiceService", () => {
  let service: SuggestionServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuggestionServiceService]
    }).compile();

    service = module.get<SuggestionServiceService>(SuggestionServiceService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
