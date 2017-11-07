import { Account } from '../objects/account';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {environment} from "../../environments/environment";

@Injectable()
export class LoginService {


    loginUrl = environment.apiUrl + "userLogin";

    accountUrl = environment.apiUrl + "account?userName=";

    constructor(private http: Http){
    }

    getLoggedInUser(): string {
        return localStorage.getItem('currentUser');
            }

    logout() {
        localStorage.clear;
    }

    getAccount(userName : string, password:string): Observable<Account> {


        let headers = new Headers();
        headers.append("Content-Type", "application/json");


     return this.http.post(this.loginUrl,
        {accountName:userName, password:password}, 
        {headers: headers})
        .map((res:Response) => {
         let account = res.json();
         if(account && account.accountName) {
             localStorage.setItem('currentUser', account.accountName);
         }
         return account;
        } ) 

        .catch(this.handleErrors);


    }

 
    getAccountDetails(userName : string): Observable<Account> {
        
        
                let headers = new Headers();
                headers.append("Content-Type", "application/json");
        
        
             return this.http.get(this.accountUrl + userName,
                {headers: headers})
                .map((res:Response) => {
                 let account = res.json();
               /* if(account && account.accountName) {
                     localStorage.setItem('currentUser', JSON.stringify(account));
                 }*/
                 return account;
                } ) 
        
                .catch(this.handleErrors);
        
        
            }


    handleErrors(error: any) {
        console.log("ERROR MSG:" + error);
        return Observable.throw(error);
    }

}