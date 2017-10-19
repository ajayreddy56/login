import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import { loginService,User } from './login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [loginService]
})
export class LoginComponent implements OnInit {

   loginForm:FormGroup;
 


  public user = new User('','');
    public errorMsg = '';

  constructor(private service:loginService) { }

  ngOnInit() {
  }
  onSubmit(){
    if(!this.service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
  }

}
