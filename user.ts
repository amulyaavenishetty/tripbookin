export class User {
    firstName:string;
    lastName:string;
    password:string;
    phoneNumber:number;
    gender:string;
    emailId:string;

    constructor(
            firstName:string,
            lastName:string,
            password:string,
            phoneNumber:number,
            gender:string,
            emailId:string,
        
    )
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.gender=gender;
        this.emailId=emailId;
    }

}
export class UserRegisterDTO {
    firstName:string;
    lastName:string;
    password:string;
    phoneNumber:number;
    gender:string;
    emailId:string;

    constructor(
            firstName:string,
            lastName:string,
            password:string,
            phoneNumber:number,
            gender:string,
            emailId:string,
        
    )
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.phoneNumber=phoneNumber;
        this.gender=gender;
        this.emailId=emailId;
    }

}
