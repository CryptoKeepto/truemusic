import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class AuthService {

  private url: string = "http://localhost:1111/api";

  constructor(private http: Http) { }

  public postLogin(email: string, password: string): Observable<any> {
    let body = {
      "email": email,
      "password": password
    };
    return this.http.post(`${this.url}/login`, body).map((res: Response) => res.json());
  }

}
