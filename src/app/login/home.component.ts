import {Component} from '@angular/core';
import {loginService} from './login.service'

@Component({
    selector: 'login-form',
    providers: [loginService],
    template: `
            <div class="container" >
                <div class="content">
                    <span>Congratulations, you have successfully logged in!!</span>
                    <br />
                    
                </div>
            </div>
    	`
})

export class HomeComponent {

    constructor(
        private _service:loginService){}

    ngOnInit(){
        
    }

    logout() {
        
    }
}