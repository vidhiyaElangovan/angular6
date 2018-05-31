import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../user';
import {Options} from '../options';
import * as $ from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
  UserDetail : {
    id: number , 
    name: string,
    email: string,
    gender: string,
    interest: string,
    skills: string;
  };
  display : Boolean;
  options : Options[];
  constructor(private userService: UserService) {
   }
  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }
  addUser(data) : void{
    data.skills = "sleeping,playing,eating";
    data.interest = data.interest.join(",");
    console.log(data.id);
      if(data.id){  
        this.editUser(data);
      }else{            
        this.userService.addUser(data).subscribe();
        alert("Data added successfully");
        this.display = false;
      }      
  }
  editUser(data): void{
    this.userService.editUser(data).subscribe();
    alert("data updated successfully");
    this.display = false;
    //this.getUsers();
  }
  showPopup(data) : void{
    this.display = true;
    if(data){
      data.interest = data.interest.split(",");
      console.log(data)
      this.UserDetail = data;
    }else{
      this.UserDetail = {};
    }
  }
  deleteUser(data):void{
    this.userService.deleteUser(data).subscribe();
    alert("Data deleted successfully");
  }
  
  ngOnInit() {
    this.getUsers();
    this.display = false;
    this.UserDetail = {};
    this.options = [
      { label: 'Eating', value: 'eating' },
      { label: 'Sleeping', value: 'sleeping' },
      { label: 'Drawing', value: 'drawing' },
      { label: 'Painting', value: 'painting' },
      { label: 'Playing', value: 'playing' }
  ];
  }

}
