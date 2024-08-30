var Customer = /** @class */ (function () {
    function Customer(theFrist, theLast) {
        this.firstName = theFrist;
        this.lastName = theLast;
    }
    return Customer;
}());
// 
var myCustomer = new Customer("Martin", "Dixon");
// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
