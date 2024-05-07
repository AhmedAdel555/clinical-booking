export class CreateServiceDTO{

  catalog_id: string;

  agentId: string;

  service_name: string;

  service_description: string;

  service_fees_amount: number;

  service_fees_description: string

  available_dates: Date[]
}