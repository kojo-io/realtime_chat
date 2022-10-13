import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {IndexService} from "./index.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  messages: Array<any> = [];
  constructor(public appService: AppService, public  service: IndexService) {

  }

  ngOnInit(): void {
    this.service.message.subscribe({
      next: (mess: any) => {
//         console.log('message', mess[0], this.messages);
        const findMessage = this.messages.find(message => message.id === mess[0].id);
        if(!findMessage) {
          this.messages.push(mess[0]);
        }
      }
    })
    this.service.getMessages().subscribe({
      next: (value) => {
        this.messages = value?.User_Messages;
        console.log(value);
      }
    })
  }

  sendMessage(ev: any) {
    const message = { message: ev.message, userId: this.appService.mainUser.id}
    console.log(message, this.appService.mainUser);
    this.service.sendMessage(message).subscribe({
      next: (value) => {
        console.log(value);
        this.service.getMessage();
      }
    })
  }
}
