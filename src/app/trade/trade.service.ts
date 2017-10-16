import { Offer } from './offer';
import { Bid } from './bid';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class TradeService {


    loginUrl = "http://localhost:8080/offer";
    buyNowUrl = "http://localhost:8080/buyNow";

    constructor(private http: Http){
    }

    buySharesNow(bid :Bid) : Observable<Bid> {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");


     return this.http.post(this.buyNowUrl,
        bid, {headers: headers})
        .map((res:Response) => {
         let aBid = res.json();
         return aBid;
        } ) 

        .catch(this.handleErrors);

    }


    createOffer(offer :Offer) : Observable<Offer> {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");


     return this.http.post(this.loginUrl,
        offer, {headers: headers})
        .map((res:Response) => {
         let anOffer = res.json();
         return anOffer;
        } ) 

        .catch(this.handleErrors);

    }



 
    handleErrors(error: any) {
        console.log("ERROR MSG:" + error);
        return Observable.throw(error);
    }

}