import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user = new User();

	constructor(private authService: AuthService, private router: Router) { }

	ngOnInit() {
	}

	logUserIn() {
		this.authService
		.login(this.user)
		.subscribe(
			(res: any) => {
				sessionStorage.setItem('token', res.token)
				this.router.navigate(['/'])
			},
			err => console.error(err)
			);
	}

}
