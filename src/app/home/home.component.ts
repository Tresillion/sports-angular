import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { TradeService } from '../trade/trade.service';
import { Account } from '../objects/account';
import { Shareholding } from '../objects/shareholding';
import { Offer } from '../trade/offer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({

    moduleId: module.id,
    templateUrl: 'home.component.html'

})

export class HomeComponent implements OnInit {

    selectedShareholding: Shareholding;
    loggedInAccount: Account;
    errorMessage: String;

    offer: Offer;

    constructor(private loginService: LoginService, private tradeService: TradeService, private route:ActivatedRoute) {
        //this.isLogged = false;
       // route.params.subscribe(val => this.initialize())
    }

    ngOnInit() {
        let loggedInUser = this.loginService.getLoggedInUser();
        this.loginService.getAccountDetails(loggedInUser)
                .subscribe((anAccount) => {
                    console.log("account details " + JSON.stringify(anAccount));
                    this.loggedInAccount = anAccount;
               
                
              }  ) ; 
        this.offer = new Offer(0,0, 0, 0, 0, 0, 0, null); 
        this.errorMessage = "";

    }

    //ensure we can create a number of offers for a shareholding to make attractive to buyers, i.e. smaller nos of shares
    //can be bought.  no of shares to sell in number of offers

    onSelect(aHolding: Shareholding) {
        this.selectedShareholding = aHolding;

    }

    makeOffer() {
        this.errorMessage = "";
        if ((this.offer.buyNowPrice) > 0 && (this.offer.buyNowPrice > this.offer.minimumPrice)) {
            this.offer.quantity = this.selectedShareholding.quantity;
            this.offer.shareholdingId = this.selectedShareholding.id;
            this.offer.status = 1;
            this.tradeService.createOffer(this.offer)
                .subscribe((anOffer) => {
                    console.log("offer details " + JSON.stringify(anOffer));
                })
            this.offer = new Offer(0,0, 0, 0, 0, 0, 0, null);    
            alert("Done and done");   
        } else {

            this.errorMessage = "Please enter stuff right!";
        }
    }
}
