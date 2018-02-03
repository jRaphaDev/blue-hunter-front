import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';
import { User } from './user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: Observable<User[]>;

  public nameSearch: FormControl;
  
  constructor(private userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit() {
    this.nameSearch = new FormControl();
  }

  search() {
    this.users = this.userService.findUserByName(this.nameSearch.value)
  }

}
