import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemList } from '../../item-list';
import { Item } from '../../item';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  list: ItemList = this._route.snapshot.data['list'];

  constructor(private readonly _route: ActivatedRoute) {}

  getTasks(): Item[] {
    console.log(this.list.tasks)
    return this.list.tasks;
  }

  submit(input: HTMLInputElement): void {
    this.addTask(input.value);
    input.value=''
  }

  addTask(task: string): void {
    this.list.tasks.unshift({
      description: task,
      done: false
    })
  }
  delete(index): void {
    this.list.tasks.splice(index, 1);
  }
}
