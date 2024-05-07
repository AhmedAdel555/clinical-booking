export class CreateAgentDTO {

  serviceId: string;

  name: string

  mobile: string

  email: string

  cash_acceptance: boolean;
  
  available_dates: Date[]
}