import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EnvironmentService} from "./environment.service";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: any;
  userFound = false;
  mainUser: any;
  constructor(private db: AngularFireDatabase, private httpClient: HttpClient, private env: EnvironmentService) {
  }

  getGreeting() {
    return this.db.object('/greeting/').valueChanges();
  }

  findUser(email: any): Observable<any> {
    return this.httpClient.get(`${this.env.apiUrl}findUser/${email}`);
  }

  createUser(data: any): Observable<any> {
    return this.httpClient.post(`${this.env.apiUrl}CreateUser`, data);
  }
}
