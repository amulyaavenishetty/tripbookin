import { Component } from '@angular/core';
import { DataOperationService } from '../data-operation.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUsername:string = '';
  userRole :string = '';
  loginStatus:boolean = false;
  photo:string='';
 

  __dataService:DataOperationService;
  router:Router;

  constructor(dataService:DataOperationService,router:Router,activatedRouter:ActivatedRoute)
  {
    this.__dataService = dataService;
    this.loginStatus = false;
    this.router=router;
  }

  verifyUser(username:string,password:string)
  {
    console.log("inside component ts : "+username+" & "+password);
    
    this.loginStatus = this.__dataService.doLogin(username,password);
    
    if(this.loginStatus == true)
    {
      // becoz local storage may give u null
      this.userRole =  localStorage.getItem('role') || '';
      this.loginUsername = localStorage.getItem('username') || '';
      this.photo = localStorage.getItem('photo') || '';
      
      console.log("username "+this.loginUsername)
      console.log("user role "+this.userRole);
      
    }
  }
  

  doLogout()
  {
    this.loginUsername = '';
    this.userRole = '';
    this.loginStatus= false;
    this.photo='';
    this.__dataService.doUserLogout();
  }
  registerUser()
  {
    this.router.navigate(['register']);
  }


}
