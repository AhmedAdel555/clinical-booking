import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./Schemas/user.schema";
import { Organization, OrganizationSchema } from "./Schemas/organization.schema";
import { Catalog, CatalogSchema } from "./Schemas/catalog.schema";
import { agent } from "supertest";
import {  ServiceAgent,ServiceAgentSchema } from "./Schemas/agent.schema";
import { Service, ServiceSchema } from "./Schemas/service.schema";

export const Models= MongooseModule.forFeature([
    { name:User.name , schema:UserSchema},
    { name:Organization.name , schema:OrganizationSchema} ,
    { name:Catalog.name , schema:CatalogSchema}    ,
    { name:ServiceAgent.name , schema:ServiceAgentSchema},
    { name:Service.name , schema:ServiceSchema}
])