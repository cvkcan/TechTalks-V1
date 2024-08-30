"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer5 = void 0;
class Customer5 {
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
}
exports.Customer5 = Customer5;
// export default Customer5;
// 
// let myCustomer5 = new Customer5("Martin", "Dixon");
// // myCustomer.firstName = "Martin";
// // myCustomer.lastName = "Dixon";
// console.log(myCustomer5.firstName);
// console.log(myCustomer5.lastName); 
