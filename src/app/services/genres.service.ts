import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Genres } from "../models/genres.model";

@Injectable()
export class GenresService {

  private url: string = "http://localhost:1111/api";

  constructor(private http: Http) { }

  public getGenres(): Observable<Genres[]> {
    return this.http.get(`${this.url}/genres`)
      .map((res: Response) => <Genres[]> res.json())
      .catch((err: any) => Observable.throw(err.json() || "Not connect to server"));
  }

}
