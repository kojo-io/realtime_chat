import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {IndexService} from "./index.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  messages: Array<any> = []
  constructor(public appService: AppService, private service: IndexService) {

  }

  ngOnInit(): void {
    this.service.getNotifications();
  }

  sendMessage(ev: any) {

  }
}
