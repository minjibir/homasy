import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouteExampleComponent } from './route-example/route-example.component';

import { AppService } from './app.service';
import { AppHttpInterceptorService } from './http-interceptor.service';

//////////
//////////
// Nawa //
//////////
//////////
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { InnerComponent } from './components/inner/inner.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AddPatientComponent } from './components/patient-form/patient-form.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentService } from './components/appointment/appointment.service';
import { PatientComponent } from './components/patient/patient.component';
import { EntranceModule } from './entrance/entrance.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { BillComponent } from './components/bill/bill.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ConsultationComponent } from './components/consultation/consultation.component';
import { AccountantComponent } from './components/accountant/accountant.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { LabModule } from './lab/lab.module';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    RouteExampleComponent,
    ///
    ///
    HeaderComponent,
    InnerComponent,
    AppointmentComponent,
    AddPatientComponent,
    AppointmentFormComponent,
    PatientComponent,
    DashboardComponent,
    SideNavComponent,
    LoginComponent,
    PatientDetailsComponent,
    BillComponent,
    PaymentComponent,
    ConsultationComponent,
    AccountantComponent,
    PageNotFoundComponent,
    DoctorComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    EntranceModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'Csrf-Token',
      headerName: 'Csrf-Token',
    }),
    LabModule,
    PharmacyModule
  ],
  providers: [
    AppService,
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptorService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
