import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LabResultService } from '../lab-result.service';

@Component({
  selector: 'app-lab-result',
  templateUrl: './lab-result.component.html',
  styleUrls: ['./lab-result.component.scss']
})
export class LabResultComponent implements OnInit {

  tests: any;

  constructor(
    private router: Router,
    private labResultService: LabResultService
  ) { }

  ngOnInit() {
    this.labResultService
    .getTestResults()
    .subscribe(
      res => {
        this.tests = res
      },
      err => {
        console.log(err)
      }
    );
  }

  recordTest() {
    this.router.navigate(['/lab/resultentry']);
  }

}
