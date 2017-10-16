
export class Offer {

    constructor(
        public id: number,
        public quantity: number,
        public buyNowPrice: number,
        public minimumPrice: number,
        public status: number,
        public shareholdingId: number,
        public highestOffer: number,
        public offerEndDate: Date


    ) {

    }

}