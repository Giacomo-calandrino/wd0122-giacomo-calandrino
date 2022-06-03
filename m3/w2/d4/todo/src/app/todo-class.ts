import { ITodos } from "./todos";

export class TodoClass implements ITodos{
    id:number;
    title:string;
    completed:boolean;

    constructor(id:number,title:string,completed:boolean){
        this.id = 0
        this.title = title
        this.completed = completed
    }
}
