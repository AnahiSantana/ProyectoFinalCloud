import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authURL = "https://y969wcvj3c.execute-api.us-east-1.amazonaws.com/TestingUsers/";

  constructor(private http: HttpClient) {
  }

  showUsers(){
    return this.http.get(this.authURL + "/users", {observe:"body", responseType:"json"});
  }

  postUserInDynamo(user:any){
    console.log(user);
    return this.http.post(this.authURL + "/users", user); 
  }

  getUserEmailInDynamo(user:any){
    console.log(user);
    return this.http.get(this.authURL + "/useremail", user); 
  }
}
