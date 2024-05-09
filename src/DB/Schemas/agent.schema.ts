import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Organization } from './organization.schema';
import { Types } from 'mongoose';
import { Service } from './service.schema';

@Schema()
export class ServiceAgent {

  @Prop({
    type: String
  })
  name: string

  @Prop({
    type: Number
  })
  mobile: number

  @Prop({
    type: String
  })
  email: string

  @Prop({
    type: Boolean
  })
  cash_acceptance: boolean;

  @Prop({
    type: [Date],
  })
  available_dates: Date[]

  @Prop({
    type: [Date],
  })
  booked_dates: Date[]

  @Prop({
    type: { type: Types.ObjectId, ref: 'Service' }
  })
  serviceId: string
}

export const ServiceAgentSchema = SchemaFactory.createForClass(ServiceAgent);

