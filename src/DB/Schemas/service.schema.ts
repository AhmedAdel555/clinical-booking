import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class Service {
  @Prop({
    type: { type: Types.ObjectId, ref: 'Organization' },
  })
  organizationId: string;

  @Prop({
    type: { type: Types.ObjectId, ref: 'Catalog' },
  })
  catalogId: string;

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
}

export const ServiceSchema = SchemaFactory.createForClass(Service);

