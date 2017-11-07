import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RegistrationService} from './registration/registration.service';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { LoginService} from './login/login.service';
import { TradeService} from './trade/trade.service';
import { ShareService } from './marketplace/share.service';
import {MarketplaceComponent} from './marketplace/marketplace.component';
import {AccountComponent} from './account/account.component';
import {PlayerComponent} from './player/player.component';
import {TradeComponent} from './trade/trade.component';
import {PaymentService} from './account/payment.service';

import { Http} from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';
import {DataTableModule} from "angular2-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    PlayerComponent,
    MarketplaceComponent,
    TradeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule.forRoot(),
    DataTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    RegistrationService,
    LoginService,
    TradeService,
    ShareService,
    PaymentService,
    BrowserAnimationsModule,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
