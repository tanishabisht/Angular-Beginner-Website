export class SignUp {
    firstName:string;
    lastName:string;
    email: string;
    password:string;
    gender:string;
    dateOfBirth:string;
    profilePhoto:string;

    constructor(firstName:string, lastName:string, email:string, password:string, gender:string, dateOfBirth:string, profilePhoto:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.profilePhoto = profilePhoto;
    }
}