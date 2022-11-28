import { Module } from "@nestjs/common";
import { SuggestionServiceService } from "./suggestion.service/suggestion.service.service";

@Module({
  providers: [SuggestionServiceService]
})
export class SuggestionSystemModule {
}
