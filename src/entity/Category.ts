import {Entity, PrimaryColumn} from "typeorm";
import * as uuid  from "uuid";

@Entity()
export class Category {

    @PrimaryColumn({ type: "binary", length: 16, nullable: false })
    private id: Buffer = Buffer.from(uuid.v4().replace(/-/g, ""), "hex");
    
}