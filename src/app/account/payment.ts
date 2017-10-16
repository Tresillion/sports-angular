export class Payment {
    
        id: number;

        constructor(

            public amount : number,
            public referenceId : string,
            public paymentDate : Date
            
    
        ){}
    
    }