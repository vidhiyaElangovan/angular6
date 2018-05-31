import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {User} from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'http://localhost/angular/public/api/v1';

  constructor(private http: HttpClient) { }
  getUsers (): Observable<User[]>{
    return this.http.get<User[]>(this.usersUrl+"/getData")
  }
  editUser (data) : Observable<any>{
    return this.http.post(this.usersUrl+"/editData/"+data.id,data,{responseType: 'text'})
  }
  addUser (data:any) : Observable<any>{
    return this.http.post(this.usersUrl+"/addData",data,{responseType: 'text'})
  }
  deleteUser(data:any) : Observable<any>{
    return this.http.delete(this.usersUrl+"/deleteData/"+data.id,{responseType: 'text'})
  }
}
