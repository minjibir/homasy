import { Component, OnInit } from '@angular/core';
import { TestRequest } from '../test-request';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { TestResult } from '../test-result';

@Component({
  selector: 'app-test-request',
  templateUrl: './test-request.component.html',
  styleUrls: ['./test-request.component.scss']
})
export class TestRequestComponent implements OnInit {

  testRequests: TestRequest[];
  patientId: number;
  route: any;

  resultIsReady: boolean;

  constructor(
    private router: Router,
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService
      .getTestRequests()
      .subscribe(
        (res: TestRequest[]) => {
          this.testRequests = res;
        },
        err => {
          console.log(err)
        }
      );
  }

  provideResult(testRequest: TestRequest) {
    this.router.navigate(['patient-details', { relative: '/' }])
  }

  searchRequestByPatient() {
    this.testService
      .getTestRequestsByPatient(this.patientId)
      .subscribe(
        (res: TestRequest[]) => {
          this.testRequests = res;
        },
        err => {
          console.log(err)
        }
      );
  }

  viewTestResult(testResultId: number) {
    this.testService
      .getTestResultById(testResultId)
      .subscribe(
        (res: TestResult) => {
          // this.router.navigate(['test-result-view'], { relativeTo:  })
        },
        err => {
          alert('Unable to get result at this time. Please try again later.');
          console.log(err);
        }
      );
  }

}
