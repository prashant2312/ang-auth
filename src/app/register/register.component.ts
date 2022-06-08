import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private apiServices:AuthService) { }

  ngOnInit(): void {
  }
user=this.fb.group({
  name:[],
  email:[],
  password:[]
})
submit(){
  this.apiServices.signup(this.user.value).subscribe((res:any)=>{    
  })
  this.user.reset()
}
}
