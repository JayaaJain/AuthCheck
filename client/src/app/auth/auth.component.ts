import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  token: string = ''
  endpoint = "http://localhost:3000/api/"
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  async login() {
    // this.httpClient.post(`${this.endpoint}login`, { "username": "john", "password": "secret" }).subscribe((res: {token: string}) => {
    //   console.log(res.valueOf());
    //   if (res.hasOwnProperty('token')) {
    //     this.token = res["token"].token
    //     console.log(this.token);

    //   }
    //   return res;
    // })

    const response = await this.httpClient.post(`${this.endpoint}login`, { "username": "john", "password": "secret" }).toPromise();
    this.token = response.toString()
    return response
  }

  randomcall() {
    this.httpClient.get(`${this.endpoint}protected`, {
      headers: {
        'Authorization': this.token
      }
    }).subscribe(res => {
      console.log(res);
      return res;
    })
  }

}
