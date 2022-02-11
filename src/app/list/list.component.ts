import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

/*  title = 'todo';*/

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Eat', done: true },
    { description: 'Code', done: false },
    { description: 'Energy drink', done: false },
    { description: 'Die', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
