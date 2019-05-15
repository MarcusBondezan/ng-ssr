import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserResponse } from './user.response';

@Injectable({ providedIn: "root" })
export class WelcomeService {

    constructor(private http: HttpClient) {

    }

    getWelcomeMessage(name: string): string {
        return `Welcome ${name}`;
    }

    getUser(): Observable<UserResponse> {
        return this.http.get<UserResponse>('https://reqres.in/api/users/2');
    }

    getWelcomeFromNestAPI(): Observable<any> {
        const requestOptions: Object = {
            responseType: 'text'
        }
        return this.http.get<any>('http://back:3000', requestOptions);
    }
}