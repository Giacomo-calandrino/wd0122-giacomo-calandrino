import { Injectable } from '@angular/core';
import { ITodos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService implements ITodos {

  id!:number
  title!:string
  completed!:boolean
  
  constructor(id:number,title:string,completed:boolean) {
    this.id = id
    this.title = title
    this.completed = completed

  }

  let todos:ITodos[] = [
    {
      id: 1,
      title:'Studiare Angular',
      completed:false
    },
    {
      id:2,
      title:'Fare pratica con Angular',
      completed:false
    },
    {
      id:3,
      title:'Fare esercizi su Angular',
      completed:false
    },
    {
      id:4,
      title:'Consegnare il progetto Angular',
      completed:false
    }
  ]

  export function getTodos(){
    return todos;
  }

}
