import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name;
  
  constructor(private userService: UserService) { 
    this.userService = userService;
  }

  ngOnInit() {
  }

  search() {
    console.log(this.name, 'user ');
    this.userService.findUserByName(this.name)
      .subscribe(
        users => console.log(users, ' users'),
        error => console.log(error, ' error')
      )
  }

}
