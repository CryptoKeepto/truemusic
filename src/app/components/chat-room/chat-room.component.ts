import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { ChatRoomsService } from "../../services/chat-rooms.service";
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  public myForm: FormGroup;
  public message: FormControl;
  public chatroom: any;
  public chatroomDetail: any = [];
  private socket: any;
  public text: string[] = [];
  private chat_room_id: number;


  constructor(private fb: FormBuilder, private chatRoomsService: ChatRoomsService) {
    this.message = this.fb.control("", Validators.required);
    this.myForm = this.fb.group({
      "message": this.message
    })
  }
  
  ngOnInit() {
    this.chatRoomsService.getChatRoom().subscribe((res) => {
      this.chatroom = res;
    })

    this.socket = io.connect("http://sittikiat.streetfood.in.th:1111");
    this.socket.on("every", (message) => {
      let text = message.socket_id + ": " + message.data;
      this.text.push(text);

      // mysql
      // let message_detail = message.data;
      // this.chatRoomsService.postMessage(message_detail, "0.00", 1, this.chat_room_id).subscribe(
      //   res => {
      //     console.log("insert ok");
      //   }
      // )

      this.myForm.reset();
    })
  }
  
  public goDetail(id: number): void {
    this.chat_room_id = id;
    this.chatRoomsService.getChatRoomDetail(id).subscribe((res) => {
      this.chatroomDetail = res;
      console.log(this.chatroomDetail)
    })
  }
  
  private send(): void {
    let message = this.myForm.value.message;
    this.socket.emit("message", message);
  }

}
