import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import {constants} from '../shared/constants';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(private userService: UserService) {
      
   }

  ngOnInit(): void {
    this.user = this.userService.getUser(constants.loggedInUserId);
  }

  getUserAvatarUrl(){
    if(this.user.preferences.avatar===''){
      return '/assets/avatars/default.png'
    } else {
      return '/assets/avatars/' + this.user.preferences.avatar + '.png'
    }
  }
}
