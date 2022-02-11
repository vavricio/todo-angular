import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './list/list.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageListComponent } from './pages/page-list/page-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    PageHomeComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
