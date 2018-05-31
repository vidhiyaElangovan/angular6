import { Component } from '@angular/core';
import {Admin} from './admin';
import {AdminService} from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  admins : Admin[];
  title = 'app';
  display = '';
  popup = false;
  enableLogout = false;
  adminDetail : {
    id : number,
    name : string,
    email : string,
    contact_number : string,
    position : string
  }
  constructor(private adminService: AdminService) {
  }
  signUp(): void{
    this.title = "Sign Up";
    this.popup = true;
  }
  login(): void{
    this.title = "Login";
    this.popup = true;
  }
  logout(): void{
    this.adminDetail = {};
    this.enableLogout = false;
  }
  closePopup(): void{
    this.popup = false;
  }
  getAdmins(): void{
    this.adminService.getAdmins().subscribe(admins => this.admins = admins);
  }
  addAdmin(data): void{
    if(this.title === "Sign Up"){
    this.adminService.addAdmin(data).subscribe();
    }else{
      console.log(data.email,data.name);
      for(let i=0; i<=this.admins.length ;i++){
        if(data.email === this.admins[i].email && data.name === this.admins[i].name){
          alert("Logged in successfully");
          this.enableLogout = true;
          break;
        }else{
          alert("Please check credentials");
          this.adminDetail = {};
          break;
        }
      }
    }
    this.popup = false;
  }

  ngOnInit(){
    this.adminDetail = {};
    this.getAdmins();
  }
}

