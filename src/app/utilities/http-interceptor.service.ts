import { Injectable } from '@angular/core';
import {HttpResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{
  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
      'x-hasura-admin-secret': `rOZ81KOAz7tP9fLtbGE1DgnVtPhkJxKnDXdEysMp15wAKkB1xBv5dZtC0pVJSEmM`,
        'content-type': 'application/json'
      }
    });
    return next.handle(req);
  }
}
