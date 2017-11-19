import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Albums } from "../models/albums.model";

@Injectable()
export class AlbumsService {

  // private url: string = "http://localhost:3000/api";
  private url: string = "http://sittikiat.streetfood.in.th:1111/api";

  constructor(private http: Http) { }

  public getAlbums(): Observable<Albums[]> {
    return this.http.get(`${this.url}/albums`)
      .map((res: Response) => <Albums[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }

  public getAlbum(id: number): Observable<any> {
    return this.http.get(`${this.url}/album/${id}`)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }


}
