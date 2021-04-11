import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import {Router} from "@angular/router";


@Injectable()
export class AccessProvider {
  //url backend api json
  server: string  = 'http://localhost:8080/eately_api/';
  constructor(
    public http: HttpClient,
  ) { }

  postData(body, file){
    let headers  = new HttpHeaders({
      'Content_Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    }

    return this.http.post(this.server + file, JSON.stringify(body), options)
      .timeout(59000)  // 59 secs timeout
      .map(res => res);
  }
  checkLogin(body, file){
    let headers  = new HttpHeaders({
      'Content_Type' : 'application/json; charset=UTF-8'
    });

    let options = {
      headers : headers
    }

    return this.http.post(this.server + file, JSON.stringify(body), options)
      .timeout(59000)  // 59 secs timeout
      .map(res => res);
  }
}
