import {Entity, Column, ManyToMany, JoinTable, PrimaryColumn} from "typeorm";
import {Category} from "./Category";
import * as uuid  from "uuid";

@Entity()
export class Question {

    @PrimaryColumn({ type: "binary", length: 16, nullable: false })
    private id: Buffer = Buffer.from(uuid.v4().replace(/-/g, ""), "hex");

    @Column()
    title: string = "Title";

    @Column()
    text: string = "Question";

    @ManyToMany(type => Category)
    @JoinTable()
    categories: Category[] | undefined;

}