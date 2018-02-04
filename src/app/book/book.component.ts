import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

import { BookService } from './book.service';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public books: Observable<Book[]>;
  public titleSearch: FormControl;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.titleSearch = new FormControl(); 
  }

  searchByTitle() {
    this.books = this.bookService.findBookByTitle(this.titleSearch.value)
  }


}
