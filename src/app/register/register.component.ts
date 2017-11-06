import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserServiceService } from './user-service.service';
  //  import { UserServiceService } from '../user-service.service';

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  users:Array<User>;
  
  constructor( 
    private userservice:UserServiceService
   ) { }

  ngOnInit() {
  }
  register(myForm){
    console.log(myForm.value);    
    let user:User=new User();
    user.name=myForm.value.name;
    user.email=myForm.value.email;
    user.address=myForm.value.address;
    user.password=myForm.value.password;
    this.userservice.registerUser(user)
    .subscribe(res => {
       console.log(res);
    
       this.users.push(res)});
  }  
 
        
    
   }
 