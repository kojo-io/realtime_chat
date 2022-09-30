import { Injectable } from '@angular/core';
import {Apollo, gql} from "apollo-angular";

const GetMessages = gql`
subscription getMessages {
  messages (order_by: {time: desc}) {
    id
    messages
    time
    userId
  }
}
`;

interface Message {
  id: number;
  messages: string;
  time: any;
  userId: any;
}

interface ListMessage {
  messages: Message[];
}

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  messages!: ListMessage;
  constructor(private apollo: Apollo) { }

  getNotifications() {
    this.apollo.subscribe<ListMessage>({
      query: GetMessages
    }).subscribe(({data} ) => {
      // this.loading = false;
      console.log('got data', data);
    },(error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
