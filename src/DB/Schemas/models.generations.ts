import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./user.schema";
import { Organization, organizationSchema } from "./organization.schema";
import { Catalog, CatalogSchema } from "./catalog.schema";
import { agent } from "supertest";
import { AgentSchema } from "./agent.schema";
import { Permission, PermissionSchema } from "./permisions.schema";
import { Service, ServiceSchema } from "./service.schema";

export const Models= MongooseModule.forFeature([
    { name:User.name , schema:UserSchema},
    { name:Organization.name , schema:organizationSchema}  ,
    { name:Catalog.name , schema:CatalogSchema}    ,
    { name:agent.name , schema:AgentSchema},
    { name:Permission.name , schema:PermissionSchema},
    { name:Service.name , schema:ServiceSchema}
          
])