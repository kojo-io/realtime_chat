import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";
import {HttpClient} from "@angular/common/http";
import {EnvironmentService} from "../environment.service";
import { Observable, Subject } from 'rxjs';
import {AngularFireStorage} from "@angular/fire/compat/storage";

const Getmessage = gql`
subscription getMessage {
User_Messages(
order_by: {time: desc}, limit: 1
) {
id
time
messages
name
}
}`;

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  users: Array<any> = [];
  message = new Subject();
  constructor(private apollo: Apollo,
              private httpClient: HttpClient,
              private fireStore: AngularFireStorage,
              private env: EnvironmentService) {
    this.getMessage();
  }

  getMessage() {
    this.apollo.subscribe({
      query: Getmessage
    }).subscribe({
      next: (data: any) => {
//         console.log('got message', data);
        this.message.next(data.data.User_Messages);

      },
      error: (err) => {
//         console.log('some error', err);
      }
    })
  }

  sendMessage(data: any): Observable<any> {
    return this.httpClient.post(`${this.env.apiUrl}Sendmessage`, data);
  }

  getMessages(): Observable<any> {
    return this.httpClient.get(`${this.env.apiUrl}getAll`);
  }
}
