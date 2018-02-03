import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from './user';

@Injectable()
export class UserService {

  url = 'http://localhost:3000/user/by-name';
  constructor(private http: Http) { }

  public findUserByName(name): Observable<User[]> {

    return this.http.get(`${this.url}/${name}`)
      .map(res => res.json().map(user => {
        return new User(
          user.name,
          user.username,
          user.admin,
          user.location,
          user.password
        );
      }));
  };
  
}