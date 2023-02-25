import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TripService {

  baseURL='http://localhost:2004';
  insertUser:string=this.baseURL+'/user/register';

  constructor(private http:HttpClient) 
  {

  }
  userArr:User[]=[];
  addUser(user:User)
  {
    this.insertUser=this.insertUser;
    console.log("user added");
    
  }
}
