import { Component, OnInit } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  items: Task[];
  item: String = '';
  task: Task;

  constructor() { }

  ngOnInit() {
    this.items = [];
  }

  addItem() {
    if(this.item==""){
      alert("Enter some value");
    }
    else{
    this.task = new Task(this.item, this.items.length + 1, false);
    this.items.push(this.task);
    this.item = '';
    }
  }

  updateItem(item: Task) {
    item.isDone = !item.isDone;
  }

  deleteItem(item: Task) {
    for(let i = 0; i < this.items.length; i++) {
      if(item.id == this.items[i].id) {
        this.items.splice(i, 1);
      }
    }
  }

  deleteAllDone() {
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].isDone) {
        this.items.splice(i, 1);
      }
    }
  }

}
