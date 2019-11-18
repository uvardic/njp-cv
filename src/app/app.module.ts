import { NgModule } from '@angular/core';

import {AlertModule} from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import {AppRouterModule} from './app-router.module';
import {HomeModule} from './home/home.module';
import {NewsModule} from './news/news.module';
import {ContactModule} from './contact/contact.module';

import { AppComponent } from './app.component';
import {FooterComponent} from './common/footer/footer.component';
import {MenuComponent} from './common/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRouterModule,
    HomeModule,
    ContactModule,
    NewsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
