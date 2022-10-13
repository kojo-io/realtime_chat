import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NbThemeModule, NbLayoutModule, NbSidebarModule} from '@nebular/theme';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {NbAuthModule} from "@nebular/auth";
import {NbFirebaseAuthModule, NbFirebasePasswordStrategy} from "@nebular/firebase-auth";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpInterceptorService} from "./utilities/http-interceptor.service";
import { GraphQLModule } from './graphql.module';
import {NbEvaIconsModule} from "@nebular/eva-icons";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbFirebaseAuthModule,
    NbEvaIconsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAM4hReaYjM6y3Nun6bD2w054hQ-y1C_Sc",
      authDomain: "hasura-realtimechat.firebaseapp.com",
      projectId: "hasura-realtimechat",
      storageBucket: "hasura-realtimechat.appspot.com",
      messagingSenderId: "719073655165",
      appId: "1:719073655165:web:7b7da04e76f1fb2d90f414",
      measurementId: "G-PHLEG65Y94"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NbAuthModule.forRoot({
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'password',
          login: {
            redirect: {
              success: '/index'
            }
          },
          register: {
            redirect: {
              success: '/auth/login'
            }
          },
          logout: {
            redirect:{
              success: '/auth/login'
            }
          }
        }),
      ],
      forms: {
        login: {
          strategy: 'password',
          rememberMe: true,
          socialLinks: []
        },
        register: {
          strategy: 'password',
          terms: true,
          socialLinks: []
        },
        logout: {
          strategy: 'password'
        },
        validation: {
          password: {
            required: true,
            minLength: 6,
            maxLength: 50
          },
          email: {
            required: true
          }
        }
      },
    }),
    HttpClientModule,
    GraphQLModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
