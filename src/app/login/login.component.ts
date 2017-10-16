import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Account } from '../objects/Account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  //template: '',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isLogged: boolean;
  loggedInAccount: Account;
  errorMessage: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.isLogged = false;
    alert("Here construct"); 
  }

  ngOnInit() {
    this.loggedInAccount = null;//new Account(1,"","","",1,new Date());
    this.loginService.logout();
    
    alert("Here init");

  }



  login() {

    this.loginService.getAccount(this.userName, this.password)
      .subscribe((anAccount) => {
        console.log("account details " + JSON.stringify(anAccount));
        this.loggedInAccount = anAccount;
    if(this.loggedInAccount == null) {
      this.isLogged = false;
      this.errorMessage = "Could not log in.";
    }  else {
      
      this.router.navigate(['']);
      this.isLogged = true;

    
  }        
    
  }  )  

  }


  getAccount() {
    
        this.loginService.getAccountDetails(this.userName)
          .subscribe((anAccount) => {
            console.log("account details " + JSON.stringify(anAccount));
            this.loggedInAccount = anAccount;
        if(this.loggedInAccount == null) {
          this.isLogged = false;
          this.errorMessage = "Could not log in.";
        }  else {
          
          this.router.navigate(['']);
          this.isLogged = true;
    
        
      }        
        
      }  )  
    
      }


}
