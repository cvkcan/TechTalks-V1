export class Customer5 {
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

// export default Customer5;

// 

// let myCustomer5 = new Customer5("Martin", "Dixon");

// // myCustomer.firstName = "Martin";
// // myCustomer.lastName = "Dixon";

// console.log(myCustomer5.firstName);
// console.log(myCustomer5.lastName); 