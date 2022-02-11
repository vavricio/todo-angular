import { Component, OnInit } from '@angular/core';
import { ListRepositoryService } from '../../services/list-repository.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {
  lists = this._lists.getAll();

  constructor(private readonly _lists: ListRepositoryService) { }

  ngOnInit(): void {

  }

}
