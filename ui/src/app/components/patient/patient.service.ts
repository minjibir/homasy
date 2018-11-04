import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = '/api/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  registerPatient(patient: Patient) {
    return this.http.post<Patient>(url, patient);
  }

  getPatients(): Observable<any> {
    return this.http.get(url);
  }
}
