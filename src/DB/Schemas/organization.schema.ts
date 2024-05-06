import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { boolean } from "zod";



@Schema()
export class Organization{
    @Prop({
        type: String,
        required: true,
        unique:true
    })
    name :string
    @Prop({
        type:Number,
        required:true
      })
      id: number;
      @Prop({
        type:Number,
        required:true,
        unique:true
      })
      License_ID: number;
      @Prop({
        type: String,
        enum:(['online' , 'offline']),
       
       default:'online'
      })
      Org_Status:string;
      @Prop({
        type: String,
        enum:['Banking', 'Finance', 'Wholesale'
        ],
       
       default:'Banking'
      })
      Organization_Type:string;
      @Prop({
        type:Number,
      
      })
      Financial_Limit_From :number;
      @Prop({
        type:Number,
      
      })
      Financial_Limit_TO :number;
      @Prop({
        type:Number,
      
      })
      Bank_account:number;
      @Prop({
        type:String,
      
      })
      Organization_Attachements:string
}
export const organizationSchema = SchemaFactory.createForClass(Organization)
