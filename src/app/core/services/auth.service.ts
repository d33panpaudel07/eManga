import { Injectable } from '@angular/core';
import { UserModel } from './models/User.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private readonly DEFAULT_WEBPATH = environment.apiUrl;

  login(userModel: UserModel) {
    const url = '/auth/login';
    return this.http.post<UserModel>(
      this.DEFAULT_WEBPATH.concat(url),
      userModel
    );
  }
}
