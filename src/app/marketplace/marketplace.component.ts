// Market place with list of players and offers for them
// search capability for player which lists offers oreder by time left
// and when player selected pop-over shows details and bid form
// with bid or buy now


//when a bid is made create a pending transaction.  This is taken of the users available balance
// when a subsequent higher bid comes in the ransaction is cancelled and new one created for new bidder.

//batch to process bids will transfer shares and complete the pending tranaction.


import { Component, OnInit } from '@angular/core';
import { ShareService } from './share.service';
import { Share } from '../objects/share';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from '../trade/offer';
import { Bid } from '../trade/bid';
import { LoginService } from '../login/login.service';
import {TradeService } from '../trade/trade.service';



@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.css']
})
export class MarketplaceComponent implements OnInit {

    selectedShare : Share; 
    shares : Share[];

    offers : Offer[];
    selectedOffer : Offer;

    constructor(private shareService: ShareService, 
         private loginService: LoginService,
         private tradeService: TradeService,
         private router: Router) {
    }

    ngOnInit() {
        this.selectedShare = null; 

        this.shareService.getShares().subscribe(
        (theShares) =>  this.shares = theShares)
    }


    getActiveOffers() {

        this.shareService.getOffers(this.selectedShare.id).subscribe(


            (theOffers) => this.offers = theOffers


        )

    }

    onSelect(share: Share) {

        this.selectedOffer = null;
        this.selectedShare = share;
        this.getActiveOffers();

    }

    onSelectOffer(offer : Offer) {
        this.selectedOffer = offer;

    }

    buyNow(offer : Offer) {

        let accountName = this.loginService.getLoggedInUser()

        console.log("User Account:" + JSON.stringify(accountName));

        
        this.tradeService.buySharesNow(new Bid(offer.buyNowPrice, accountName, offer.id))
            .subscribe(
                (bid) => {
                    if(bid) alert("You just bought shares!");
                    else alert("Bid failed");



                }

            )



    }
}