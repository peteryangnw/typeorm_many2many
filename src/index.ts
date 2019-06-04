import "reflect-metadata";
import {createConnection} from "typeorm";
import { Category } from "./entity/Category";
import { Question } from "./entity/Question";

createConnection().then(async connection => {

    let category = new Category();
    let question = new Question();

    await connection.manager.save(category);

    question.categories = [category];
    await connection.manager.save(question);
    
}).catch(error => console.log(error));
