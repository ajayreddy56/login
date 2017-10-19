import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Rx';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

var users = [
  new User('test@gmail.com','123456')
];

@Injectable()
export class loginService {

    constructor(
    private _router: Router){}

      login(user){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser){
      this._router.navigate(['Home']);      
      return true;
    }
    return false;

  }

}