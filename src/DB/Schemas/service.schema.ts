import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Organization } from './organization.schema';
import { Types } from 'mongoose';
import { Catalog } from './catalog.schema';

@Schema()
export class Service {
  @Prop({
    type: { type: Types.ObjectId, ref: 'Organization' },
  })
  organization: Organization;

  @Prop({
    type: { type: Types.ObjectId, ref: 'Catalog' },
  })
  catalog: Catalog;

  @Prop({
    type: String,
  })
  service_name: string;

  @Prop({
    type: String,
  })
  service_description: string;

  @Prop({
    type: Number,
  })
  service_fees_amount: number;

  @Prop({
    type: String,
  })
  service_fees_description: string

  @Prop({
    type: [Date],
  })
  available_dates: Date[]

  @Prop({
    type: [Date],
  })
  booked_dates: Date[]
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

