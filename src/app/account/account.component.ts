import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { PaymentService} from './payment.service'
import { Account } from '../objects/account';
import { Payment } from './payment';

@Component({

    moduleId: module.id,
    templateUrl: 'account.component.html'

})

export class AccountComponent implements OnInit {

    loggedInAccount: Account;
    loggedInUser: string;
    errorMessage: string;

    payment : Payment;

    constructor(private loginService: LoginService, private paymentService: PaymentService) {
        //this.isLogged = false;
    }

    ngOnInit() {

        this.loggedInUser = this.loginService.getLoggedInUser();
        alert(this.loggedInUser);
        this.loginService.getAccountDetails(this.loggedInUser)
        .subscribe((anAccount) => {
            console.log("account details " + JSON.stringify(anAccount));
            this.loggedInAccount = anAccount;
       
        
      }  ) ; 
    
      

        this.payment = new Payment(0,"", null);
        this.errorMessage = "";

    }

    processPayment() {

        if(this.payment.amount < 1 || this.payment.referenceId.length == 0) {
            alert("Please enter a valid amount and reference");
            return;
        }
        

        this.paymentService.makePayment(this.loggedInAccount.id , this.payment).subscribe(
            (aPayment) => {
                console.log(JSON.stringify(aPayment));
                    if(aPayment)
                        alert("Payment for " || aPayment.amount || " was sucessful");
                    else    
                        alert("Payment failed");
                  
                }        
        )
//TODO : implement call to payment service

    }

   
}
