import { Injectable } from '@angular/core';
import { ItemList } from '../item-list';

const lists: ItemList[] = [
  {
    title: 'Example Todo-List',
    tasks: [
      {
        description: 'buy milk',
        done: false
      },
      {
        description: 'play with cat',
        done: false
      },
      {
        description: 'do homework',
        done: true
      }
    ]
  },
  {
    title: 'Second Todo-List',
    tasks: [
      {
        description: 'Example task 1',
        done: false
      },
      {
        description: 'Example task 2',
        done: true
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class ListRepositoryService {
  constructor() { }

  getAll(): ItemList[] {
    return [...lists];
  }

  getOne(id: number): ItemList | undefined {
    if (id < 0) {
      return undefined;
    }

    return lists[id-1];
  }

  create(title: string): ItemList {
    const list: ItemList = {
      title,
      tasks: []
    };

    lists.push(list);

    return list;
  }

  delete(id: number): void {
    lists.splice(id - 1, 1)
  }

}
