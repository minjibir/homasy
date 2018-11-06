import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment/appointment';
import { AppointmentService } from '../appointment/appointment.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  appointment = new Appointment();

  patientId: number;
  appointmentDate: string;
  appointmentTime: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(
        (params: ParamMap) => {
          this.patientId = parseInt(params.get('id'));
        }
      );
  }

  addAppointment() {
    this.appointment.patientId = this.patientId;
    if (
      this.appointment.appointmentDate !== undefined &&
      this.appointment.appointmentTime !== undefined &&
      this.appointment.patientId !== null
    ) {
      this.appointmentService
        .addAppointment(this.appointment)
        .subscribe(
          (res: Appointment) => {
            this.appointment = res
          },
          err => {
            console.log(err);
          }
        );
    }
  }

}
