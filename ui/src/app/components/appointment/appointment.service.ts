import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { HttpClient } from '@angular/common/http';


const url = 'http://localhost:9000/appointments'

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(appointment: Appointment) {
    return this.http.post<Appointment>(url, appointment)
  }

  getAppointments() {
    return this.http.get<Appointment[]>(url)
  }
}
