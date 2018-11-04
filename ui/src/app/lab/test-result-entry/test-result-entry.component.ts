import { Component, OnInit } from '@angular/core';
import { TestRequest } from '../test-request';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-result-entry',
  templateUrl: './test-result-entry.component.html',
  styleUrls: ['./test-result-entry.component.scss']
})
export class TestResultEntryComponent implements OnInit {

  test = new TestRequest();

  constructor(
    private router: Router,
    private labResultService: TestService
  ) { }

  ngOnInit() {
  }

  saveRecord(test: TestRequest) {
    this.labResultService
      .recordResult(test)
      .subscribe(
        res => {
          this.test = res
        },
        err => {
          console.log(err);
        }
      );
  }

}
