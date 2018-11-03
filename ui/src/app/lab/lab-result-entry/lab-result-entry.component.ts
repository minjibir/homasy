import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { Router } from '@angular/router';
import { LabResultService } from '../lab-result.service';

@Component({
  selector: 'app-lab-result-entry',
  templateUrl: './lab-result-entry.component.html',
  styleUrls: ['./lab-result-entry.component.scss']
})
export class LabResultEntryComponent implements OnInit {

  test = new Test();

  constructor(
    private router: Router,
    private labResultService: LabResultService
  ) { }

  ngOnInit() {
  }

  saveRecord(test: Test) {
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
