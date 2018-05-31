import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Admin} from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private usersUrl = 'http://localhost/angular/public/api/v1';

  constructor(private http: HttpClient) { }
  getAdmins() : Observable<Admin[]>{
    return this.http.get<Admin[]>(this.usersUrl+"/employeesdata")
  }
  addAdmin (data:any) : Observable<any>{
    return this.http.post(this.usersUrl+"/employees",data,{responseType: 'text'})
  }
}
