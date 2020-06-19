import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from 'src/app/Model/loginPayload';
import { LoginSuccess } from 'src/app/Model/loginSuccessPayload';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(
    private http : HttpClient
  ) { }
  public login(login:Login) : Observable<LoginSuccess>{
    return this.http.post<LoginSuccess>(`${environment.apiUrl}/api/auth/login`,login);
  }
}
