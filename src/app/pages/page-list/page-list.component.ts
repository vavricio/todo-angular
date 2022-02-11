import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemList } from '../../item-list';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent {
  list: ItemList = this._route.snapshot.data['list'];

  constructor(private readonly _route: ActivatedRoute) {}
}
