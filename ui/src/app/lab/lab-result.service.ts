import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Test } from './test';

const url = '/api/lab/results';

@Injectable({
  providedIn: 'root'
})
export class LabResultService {

  constructor(private http: HttpClient) { }  
  
  getTestResults(): Observable<any> {
    return this.http.get(url);
  }

  recordResult(testResult: Test): Observable<any> {
    return this.http.post<Test>(url, testResult);
  }

}
