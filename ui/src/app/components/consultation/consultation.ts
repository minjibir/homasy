export class Consultation {
    public consultationId: string;
    public appointmentId: string;
    public patientId: string;
    public doctorId = 0;
    public statement: string;
    public testtypes = 'None';
    public diagnosis: string;
    public prescription: string;
}
