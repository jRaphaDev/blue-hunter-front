import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Book } from './book';

@Injectable()
export class BookService {

  private URL = 'http://localhost:3000/book/by-title';

  constructor(private http: Http) { }

  public findBookByTitle(title): Observable<Book[]> {

    return this.http.get(`${this.URL}/${title}`)
      .map(res => res.json().map(book => {
        return new Book(
          book.title,
          book.author
        );
      }));
  };
}