import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  private usersUrl = 'api/users/';
  private url = `${environment.apiUrl}/${this.usersUrl}`;

  constructor(private _http : HttpClient) { }
  public getAllUser(){
    return this._http.get<Profile[]>(this.url).pipe(
      tap(value => console.log("Data",value)),
      catchError(this.errorHandle)
    )
  }
  public createUser(data : Profile){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const newProfile ={
      ...data,
      id:null
    };
    return this._http.post<Profile>(this.url,newProfile,{headers}).pipe(
      tap(data => console.log("create Profile",JSON.stringify(data))),
      catchError(this.errorHandle)
    )
  }
  public updateUser(data : Profile){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrl}/${this.usersUrl}${data.id}`;

    return  this._http.put<Profile>(url,data,{headers}).pipe(
      tap(data => console.log("update profile",data)),
      catchError(this.errorHandle)
    )
  }
  public deleteUser(id:any){
    console.log("Id service",id);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrl}/${this.usersUrl}delete/${id}`;
    return this._http.post<Profile>(url,{headers}).pipe(
      tap(data => console.log("delete profile",data)),
      catchError(this.errorHandle)
    )
  }
  public getProfile (id:any){
    console.log("Id service",id);

    const url = `${environment.apiUrl}/${this.usersUrl}${id}`;
    return this._http.get<Profile>(url).pipe(
      tap(data=>console.log("Data-Service",data)),
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
