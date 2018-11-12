import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from './user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user = new User();

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	logUserIn() {
		this.authService
		.login(this.user)
		.subscribe(
			(res: string) => {
				sessionStorage.setItem('token', res);
			},
			err => console.error(err)
			);
	}

}
