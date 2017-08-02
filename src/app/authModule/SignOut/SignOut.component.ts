import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Share/Services/user.service';

@Component({
  selector: 'app-signout',
  templateUrl: './SignOut.component.html',
  styleUrls: ['./SignOut.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
      private router: Router,
        private userService: UserService
    ) { }

  ngOnInit() {
      this.userService.refreshToken();
      this.router.navigate(['']);
  }

}
