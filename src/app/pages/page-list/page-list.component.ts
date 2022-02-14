import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ItemList } from '../../item-list';
import { Item } from '../../item';
import {ListRepositoryService} from "../../services/list-repository.service";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
  list: ItemList = this._route.snapshot.data['list'];
  lists: ItemList[] = this._lists.getAll()

  constructor(private readonly _route: ActivatedRoute, private readonly _lists: ListRepositoryService) {}

  ngOnInit () {
    this._route.paramMap.subscribe((params) => {
      console.log(params);
      this.list = this._lists.getOne(parseInt(params.get('id')));
    })
  }

  getTasks(): Item[] {
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
