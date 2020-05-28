import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from '../model/profilePayload';
import { environment } from 'src/environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private _http : HttpClient
  ) { }

  public getProfile (id:any){
    return this._http.get<Profile>(`${environment.apiUrl}/api/users/${id}`).pipe(
      tap(data=>console.log("Data",data)),
      catchError(this.errorHandle)
    );
  }
  private errorHandle(err){
    let errorMessage : string;
    if(err.error instanceof ErrorEvent){
         // A client-side or network error occurred. Handle it accordingly.
         errorMessage = `An error occurred :${err.error.message}`
    }else{
         // The backend returned an unsuccessful response code.
         // The response body may contain clues as to what went wrong,
         errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.log(err)
    return throwError(errorMessage);
  }
  
}
