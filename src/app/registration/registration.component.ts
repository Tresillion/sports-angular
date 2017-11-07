import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Account } from '../objects/account';
import { Customer } from '../objects/customer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorMessage : string ;

  account : Account;
  password : string;

  dob : Date;

  constructor(private registrationService : RegistrationService,  private router: Router) { }

  ngOnInit() {
     this.errorMessage = "";
     this.account = new Account(0,"",1,null,null,0,"",null);
     let customer = new Customer(0,"","","","",null);
     this.account.customer =customer;
  }

  registerUser() {
    console.log(JSON.stringify(this.account));
    alert("Here");
    this.account.customer.dateOfBirth = this.dob;
    this.registrationService.registerAccount(this.account).subscribe(
      (anAccount) => {console.log(JSON.stringify(anAccount));
        this.router.navigate(['login']);
      
    }
    );
    

  }

}
