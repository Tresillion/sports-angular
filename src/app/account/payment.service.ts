import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Payment } from './payment';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class PaymentService {


    paymentUrl = "http://localhost:8080/payment";


    constructor(private http: Http){
    }
   
    makePayment(accountId : number, payment:Payment): Observable<Payment> {


        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        let fullUrl = this.paymentUrl +'?accountId=' + accountId;

     return this.http.post(fullUrl,
        payment, 
        {headers: headers})
        .map((res:Response) => {
         let aPayment = res.json();

         return aPayment;
        } ) 

        .catch(this.handleErrors);


    }

 
    handleErrors(error: any) {
        console.log("ERROR MSG:" + error);
        return Observable.throw(error);
    }

}