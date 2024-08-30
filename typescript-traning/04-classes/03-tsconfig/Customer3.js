"use strict";
class Customer3 {
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    constructor(theFrist, theLast) {
        this._firstName = theFrist;
        this._lastName = theLast;
    }
}
// 
let myCustomer3 = new Customer3("Martin", "Dixon");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
