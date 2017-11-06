import { Injectable } from '@angular/core';
import {Http,Response, RequestOptions} from '@angular/http';
import { User } from './user';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class UserServiceService {

   
  constructor(private http:Http) { 
    
  }
  private postUrl="/api/registerUser";
  private mailUrl="/api/sendmail";
  
  
  registerUser(user:User) {
    let headers=new Headers({'Content-Type':'application/json' });
    let options=new RequestOptions({headers: headers});
    return this.http.post(this.postUrl, JSON.stringify(user),options)
    .map((response:Response)=>response.json());  }

}



