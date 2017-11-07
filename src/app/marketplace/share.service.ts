import { Share } from '../objects/share';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Offer } from '../trade/offer';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";


@Injectable()
export class ShareService {


    sharesUrl = environment.apiUrl + "shares";
    offersUrl =  environment.apiUrl + "allOffers?shareId=";



    constructor(private http: Http){
    }



    getShare(id : number) : Observable<Share> {
        
                let headers = new Headers();
                headers.append("Content-Type", "application/json");
        
                
        
             return this.http.get(this.sharesUrl + "/" + id,
                 {headers: headers})
                .map((res:Response) => {
                let share :Share = res.json();
                console.log("******" +JSON.stringify(share));
                return share;
                } ) 
        
                .catch(this.handleErrors);
        
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

    getShareByName(name : string) : Observable<Share[]> {
        
                let headers = new Headers();
                headers.append("Content-Type", "application/json");
        
             let url = this.sharesUrl + "?playerName=" + name;    
        
             return this.http.get(url,
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