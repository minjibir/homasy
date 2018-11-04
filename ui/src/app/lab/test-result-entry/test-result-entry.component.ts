import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { TestResult } from '../test-result';
import { CHEMISTRY, MICROBIOLOGY, HAEMATOLOGY } from '../test-types';

@Component({
  selector: 'app-test-result-entry',
  templateUrl: './test-result-entry.component.html',
  styleUrls: ['./test-result-entry.component.scss']
})
export class TestResultEntryComponent implements OnInit {

  testResult = new TestResult();

  chemistry = CHEMISTRY;
  microbiology = MICROBIOLOGY;
  haematology = HAEMATOLOGY;

  labSelect: any;

  constructor(
    private router: Router,
    private TestService: TestService
  ) { }

  ngOnInit() {
  }

  saveRecord() {
    this.TestService
      .recordResult(this.testResult)
      .subscribe(
        res => {
          this.testResult = res
        },
        err => {
          console.log(err);
        }
      );
  }

  addTest() {

  }

}
