import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegistrationComponent } from './registration/registration.component';
import {AccountComponent } from './account/account.component';

const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'market', component: MarketplaceComponent},
    {path: 'register', component: RegistrationComponent},
    {path: 'account', component: AccountComponent},

    //otherwise go to home
    {path:'**', redirectTo: 'account'  }

]

export const routing = RouterModule.forRoot(appRoutes);