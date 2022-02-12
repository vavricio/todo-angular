import { Component, OnInit } from '@angular/core';
import { ListRepositoryService } from '../../services/list-repository.service';
import {ItemList} from "../../item-list";

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  lists: ItemList[];

  constructor(private readonly _lists: ListRepositoryService) {
    this.loadList()
  }

  submit(input: HTMLInputElement): void {
    this.addList(input.value);
    input.value=''
  }

  loadList(): void {
    this.lists = this._lists.getAll();
  }

  deleteList(id: number): void {
    this._lists.delete(id);
    this.loadList();
  }

  addList(title: string): void {
    this._lists.create(title);
    this.loadList();
  }
  ngOnInit(): void {}

}
