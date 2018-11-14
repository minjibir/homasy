import { Component, OnInit } from '@angular/core';
import { Staff } from '../../services/staff';
import { StaffService } from '../../services/staff.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-staff',
  templateUrl: './register-staff.component.html',
  styleUrls: ['./register-staff.component.scss']
})
export class RegisterStaffComponent implements OnInit {

  staff = new Staff();
  staffFormGroup: FormGroup;
  confirmPassword: string;

  constructor(private staffService: StaffService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.staffFormGroup = this.formBuilder.group({
      firstName: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      unit: [null, [Validators.required]],
      username: [null, [Validators.required, Validators.minLength(8)]],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  registerStaff() {
    this.staffService
    .registerStaff(this.staffFormGroup.value)
    .subscribe(
      (res: Staff) => {
        this.staff = res
        console.info(res)
      },
      err => {
        console.error(err);
      }
      );
  }

  get password() {
    return this.staffFormGroup.get('password').value;
  }

}
