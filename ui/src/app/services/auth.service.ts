import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../login/user';


const url = '/api/login';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private httpClient: HttpClient, private router: Router) { }

	login(user: User): Observable<string> {
		return this.httpClient.post<string>(url, user);
	}

	logout() {
		sessionStorage.removeItem('token');
		this.router.navigate(['/login']);
	}

	loggedIn(): boolean {
		return !!sessionStorage.getItem('token');
	}
}
