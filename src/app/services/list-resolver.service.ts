import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ItemList } from '../item-list';
import { ListRepositoryService } from './list-repository.service';

@Injectable({
  providedIn: 'root'
})
export class ListResolverService implements Resolve<ItemList> {
  constructor(
    private readonly _lists: ListRepositoryService,
    private readonly _router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ItemList | undefined {
    const list = this._lists.getOne(route.params['id']);

    if (!list) {
      this._router.navigate(['/']);
      return undefined;
    }

    return list;
  }
}
