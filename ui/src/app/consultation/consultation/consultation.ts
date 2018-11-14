export class Consultation {
    public consultationId: number;
    public patientId: number;
    public doctorId: number;
    public statement: string;
    public investigation: string;
    public findings: string;
    public diagnosis: string;
    public consultationDate?: string;
}
