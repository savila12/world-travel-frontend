import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

const herokuUrl = 'https://pacific-brook-29913.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;
  searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { console.log('user service loaded'); }

  registerUser(newUser): any{
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe( response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.email}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/api/adventures']);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = null;
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }

}
