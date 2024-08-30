class Customer {
    firstName: string;
    lastName: string;

    constructor(theFrist: string, theLast: string){
        this.firstName = theFrist;
        this.lastName = theLast;
    }
}

// 

let myCustomer = new Customer("Martin", "Dixon");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);