
import { Account } from '../objects/account';
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Injectable()
export class RegistrationService {


    loginUrl = "http://localhost:8080/login";
    registerUrl = "http://localhost:8080/register";

    constructor(private http: Http){
    }

    registerAccount(accountDetails:Account) : Observable<string> {


        let headers = new Headers();
        headers.append("Content-Type", "application/json");


     return this.http.post(this.registerUrl,
        JSON.stringify(accountDetails),
        {headers: headers}).map((res:Response) => res.json())
        .catch(this.handleErrors);

    }

    handleErrors(error: Response) {
        console.log("ERROR MSG:" + JSON.stringify(error.json()));
        return Observable.throw(error);
    }

}