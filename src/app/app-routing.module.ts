import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListComponent } from './pages/page-list/page-list.component';
import { ListResolverService } from './services/list-resolver.service'; // CLI imports router

// sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: '',
    component: PageHomeComponent
  },
  {
    path: 'list/:id',
    component: PageListComponent,
    resolve: { list: ListResolverService }
  },
  {
    path: '**',
    redirectTo: ''
  }
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
