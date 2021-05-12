import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

const herokuUrl = 'https://pacific-brook-29913.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AdventureService {
  public adventureName: string;
  public dateWent: string;
  public adventureDescription: string;
  public countryName: string;

  constructor(private http: HttpClient) { }

  getAdventures(): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/adventures`, requestOptions);
  }

  getAdventure(adventure): any{
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .get(`${herokuUrl}/api/adventures/${adventure.id}`, requestOptions);
  }

  createAdventure(newAdventure): any {
    console.log(newAdventure);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
    return this.http
      .post(`${herokuUrl}/api/adventures`, newAdventure, requestOptions);
  }

  deleteAdventure(adventure: any): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .delete(`${herokuUrl}/api/adventures/${adventure.id}`, requestOptions);
  }

  updateAdventure(adventure): any {
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    console.log(token, requestOptions, adventure);
    return this.http
        .put(`${herokuUrl}/api/adventures/${adventure.id}`, adventure, requestOptions);
  }

}
