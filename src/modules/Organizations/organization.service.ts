import { Injectable } from "@nestjs/common";


@Injectable()
export class organizationServices{
    constructor(){
    }
    //==========API========
    createOrg():string{
        return "hello from new org"
    }
    
}