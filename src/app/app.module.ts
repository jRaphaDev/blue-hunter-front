import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BookComponent } from './book/book.component';

import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BookComponent
  ],
  imports: [
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
