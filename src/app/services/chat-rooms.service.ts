import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class ChatRoomsService {

  public url: string = "http://localhost:1111/api";

  constructor(private http: Http) { }

  public getChatRoom() {
    return this.http.get(`${this.url}/chat_rooms`).map((res: Response) => res.json());
  }

  public getChatRoomDetail(id: number) {
    return this.http.get(`${this.url}/chat_room/${id}`).map((res: Response) => res.json());
  }

  public postMessage(message_detail: string, message_created: string, user_id: number, chat_room_id: number) {
    const body = {
      "message_detail": message_detail,
      "message_created": message_created,
      "user_id": user_id,
      "chat_room_id": chat_room_id
    }
    return this.http.post(`${this.url}/message`, body).map((res: Response) => res.json());
  }

}
