import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppHttpInterceptorService } from './http-interceptor.service';
//////////
//////////
// Nawa //
//////////
//////////
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { EntranceModule } from './entrance/entrance.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';
import { LabModule } from './lab/lab.module';
import { ConsultationModule } from './consultation/consultation.module';
import { RecordsModule } from './records/records.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
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
    PharmacyModule,
    ConsultationModule,
    RecordsModule
  ],
  providers: [
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
