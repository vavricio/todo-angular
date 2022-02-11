import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lists = [
    {title: 'Grocery list', tasks: {}}, //todo add items to list
    {title: 'Book list', tasks: {}},
    {title: 'Home tasks', tasks: {}},
  ];

  addList(title: string) {
    this.lists.unshift({
      title,
      tasks: {}
    });
  }
}
