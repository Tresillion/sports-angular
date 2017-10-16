import { Share } from '../objects/share';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Offer } from '../trade/offer';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";


@Injectable()
export class ShareService {


    sharesUrl = "http://localhost:8080/shares";
    offersUrl = "http://localhost:8080/allOffers?shareId=";



    constructor(private http: Http){
    }


    getShares() : Observable<Share[]> {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        

     return this.http.get(this.sharesUrl,
         {headers: headers})
        .map((res:Response) => {
        let shares :Share[] = res.json();
        console.log("******" +JSON.stringify(shares));
        return shares;
        } ) 

        .catch(this.handleErrors);

    }


    getOffers(id : Number) : Observable<Offer[]> {

        let theHeaders = new Headers();
        theHeaders.append("Content-Type", "application/json");

        return this.http.get(this.offersUrl + id,
            {headers : theHeaders})
            .map((res:Response) => {
            let offers : Offer[] = res.json();
            console.log("**OFFERS RETURNED**" + JSON.stringify(offers));
            return offers;

            })
            .catch(this.handleErrors);
    }


    handleErrors(error: any) {
        console.log("ERROR MSG:" + error);
        return Observable.throw(error);
    }

}