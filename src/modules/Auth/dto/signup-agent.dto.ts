import { IsMongoId, IsNotEmpty } from "class-validator";
import { SignUpDTO } from "./signup.dto";

export class SignUpAgentDTO extends SignUpDTO{
  @IsNotEmpty()
  cash_acceptance: boolean;

  @IsMongoId()
  serviceId: string;

  available_dates: Date[]
}