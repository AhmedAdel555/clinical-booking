import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Organization } from './organization.schema';
import { Types } from 'mongoose';
import { Service } from './service.schema';

@Schema()
export class Agent {

  @Prop({
    type: { type: Types.ObjectId, ref: 'Organization' },
  })
  organization: Organization;

  @Prop({
    type: String
  })
  name: string

  @Prop({
    type: String
  })
  mobile: string

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
}

export const AgentSchema = SchemaFactory.createForClass(Agent);

