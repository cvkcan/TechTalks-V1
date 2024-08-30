class Customer2 {
    private _firstName: string;
    private _lastName: string;

    public get firstName() : string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName() : string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
    

    constructor(theFrist: string, theLast: string){
        this._firstName = theFrist;
        this._lastName = theLast;
    }

    
}

// 

let myCustomer2 = new Customer2("Martin", "Dixon");

// myCustomer.firstName = "Martin";
// myCustomer.lastName = "Dixon";

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName); 