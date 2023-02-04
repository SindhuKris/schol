import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  login() {

  }

  register(register: any) {
      return this.http.post('URL', register);
  }

  getEntries(){
    return this.http.get('https://api.publicapis.org/entries');
  }
  
}
