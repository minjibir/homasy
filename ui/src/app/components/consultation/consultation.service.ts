import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Consultation } from './consultation';
import { HttpClient } from '@angular/common/http';


const url = '/api/consultations';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  saveConsultation(consultation: Consultation) {
    return this.http.post<Consultation>(url, consultation)
  }
}
