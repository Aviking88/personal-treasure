import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class DataServiceService {
  constructor(private httpClient: HttpClient) {

   }

  //  get(url:string){
  //    const options: HttpHeaders = {

  //      token: ''
  //    }
  //    this.httpClient.get(url,options);
  //  }


}
