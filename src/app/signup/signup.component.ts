import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userName: string;
  public emailAddress: string;
  public password: string;

  registerUser(): void {
    const newUser = {email: this.emailAddress, userName: this.userName, password: this.password};
    console.log(newUser);
    this.userService.registerUser(newUser);
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
