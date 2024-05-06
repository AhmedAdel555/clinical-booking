import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { Organization, organizationSchema } from "./organization.schema";

export const Models= MongooseModule.forFeature([
    { name:User.name , schema:UserSchema},
    { name:Organization.name , schema:organizationSchema}  
])