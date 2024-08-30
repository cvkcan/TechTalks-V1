class Customer4 {
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(value: string) {
        this._firstName = value;
    }

    constructor(private _firstName: string, private _lastName: string){
    }
}

// 

let myCustomer4 = new Customer4("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer4.firstName);
console.log(myCustomer4.lastName); 