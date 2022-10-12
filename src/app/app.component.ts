import { Component } from '@angular/core';
import {NbAuthService} from "@nebular/auth";
import {AppService} from "./app.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'realtime_chat';
  constructor(private service: NbAuthService, private appService: AppService, private router: Router) {
    service.onTokenChange().subscribe((token) => {
      if (token.isValid()) {
        appService.user = token.getPayload();
        if (!appService.userFound) {
          this.findUser();
        }
      } else {
        console.log('in valid');
        this.logOut();
      }
    })
  }

  findUser() {
    this.appService.findUser(this.appService.user?.email).subscribe((value) => {
      if (value.user.length === 0) {
        this.createUser();
      } else {
        this.appService.mainUser = value.user[0];
        this.appService.userFound = true;
      }
      console.log(value.user);
    })
  }

  logOut() {
    this.router.navigate(['/auth/logout']);
  }

  createUser() {
    const data = {
      name: this.appService.user?.email
    };
    this.appService.createUser(data).subscribe((value) => {
      if (value.insert_user?.returning.length > 0){
        this.appService.userFound = true;
      }
    })
  }
}
