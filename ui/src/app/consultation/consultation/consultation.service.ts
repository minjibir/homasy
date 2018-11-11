import { Injectable } from '@angular/core';
import { Consultation } from './consultation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const url = '/api/api/consultations';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  saveConsultation(consultation: Consultation): Observable<Consultation> {
    return this.http.post<Consultation>(url, consultation)
  }

  getConsultationsByPatient(patientId: number): Observable<any> {
    return this.http.get<any>(url + '/' + patientId);
  }


}
