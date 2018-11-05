export class Patient {
    patientId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    maritalStatus: string;
    age: number;
    height: number;

    constructor() {
        this.patientId = '';
        this.firstName = '';
        this.middleName = '';
        this.lastName = '';
        this.phoneNumber = '';
        this.gender = '';
        this.maritalStatus = '';
        this.age = 0;
        this.height = 0;
    }
}
