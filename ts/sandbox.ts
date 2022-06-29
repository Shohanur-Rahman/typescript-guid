class Invoice{
    client: string;
    details: string;
    amount: number;
    constructor(c: string, d: string, a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}


const invOne = new Invoice("Jack","Work in USA", 9585);
const invTwo = new Invoice("Maria","Work in UK", 8585);

let invoices: Invoice[]=[];
invoices.push(invOne);
invoices.push(invTwo);


invoices.forEach(invoice =>{
    console.log(invoice.client);
})