import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from 'src/app/page-features/home/model/profilePayload';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Department } from 'src/app/page-features/management/models/department';
import { Skill } from 'src/app/page-features/home/model/skillPayload';

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
    console.log("Data",data);
    
    const newProfile ={
      ...data,
    };
    return this._http.post<Profile>(this.url,newProfile,{headers}).pipe(
      tap(data => console.log("create Profile",JSON.stringify(data))),
      catchError(this.errorHandle)
    )
  }
  public updateUser(id:number|string,changes :Partial<Profile>){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${environment.apiUrl}/${this.usersUrl}${id}`;

    return  this._http.put<Profile>(url,changes,{headers}).pipe(
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
  public getDepartment(){
    return this._http.get<Department[]>(`${environment.apiUrl}/api/department/`);
  };

  public filterUserByDepartment(id:number){
    return this._http.get<Profile[]>(`${environment.apiUrl}/api/users/filter/${id}`);
  };
  public getAllSkill(){
    return this._http.get<Skill[]>(`${environment.apiUrl}/api/skill/`);
  };
  public searchName(keywork:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.get<Profile[]>(`${environment.apiUrl}/api/users/search?keywork=${keywork}`);
  };
  public getProfileByIndexChangePanigator(currentPage:any,limitPage : any){
    return this._http.get<Profile[]>(`${this.url}?page=${currentPage}&limit=${limitPage}`);
  };
  public createSkill(skill :Skill){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this._http.post<any>(`${environment.apiUrl}/api/skill/`,skill,{headers});
  };
  public getSkill(id: any){
    return this._http.get<Skill>(`${environment.apiUrl}/api/skill/${id}`)
  };
  public updateSkill(skill : Skill){
    return this._http.post<Skill>(`${environment.apiUrl}/api/skill/update`,skill);
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
