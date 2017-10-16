import {Share} from './share';
import {Offer} from '../trade/offer';

export class Shareholding {

    constructor(
        public id: number,
        public quantity: number,
        public nominalValue: number,
        public dateIssued: Date,
        public share : Share,
        public offers :Offer[]
    ) {}


}