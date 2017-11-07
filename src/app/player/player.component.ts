
import { Component, OnInit } from '@angular/core';
import { ShareService } from '../marketplace/share.service';
import { Share } from '../objects/share';
import { Router, ActivatedRoute } from '@angular/router';
import { Offer } from '../trade/offer';
import { Bid } from '../trade/bid';
import { LoginService } from '../login/login.service';
import {TradeService } from '../trade/trade.service';
import { DatePipe } from '@angular/common';



@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

    id: number;
    private sub: any;
    share : Share;

    offers : Offer[];
    selectedOffer : Offer;

    constructor(private shareService: ShareService, 
        private tradeService: TradeService,
        private loginService: LoginService,
        private route: ActivatedRoute,
        private datePipe: DatePipe) {
   }

    ngOnInit() {
       this.route.params.subscribe(params => {
            this.id = +params['id']; 
            
            this.shareService.getOffers(this.id).subscribe(
                
                            (theOffers) => this.offers = theOffers
                
                        )

            })  

            this.shareService.getShare(this.id).subscribe(

                (theShare) => this.share = theShare
            )

        //this.shareService.getShares().subscribe(
        //(theShares) =>  this.shares = theShares)
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