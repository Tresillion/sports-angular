
import { Customer } from './customer'; 
import { Shareholding} from './shareholding';

export class Account {

  constructor(
    public id: number,
    public accountName: string,
    public accountType: number,
    public opened: Date,
    public customer: Customer,
    public balance: number,
    public password: string,
    public shareholdings: Shareholding[]
  ) { 

    

   }

}