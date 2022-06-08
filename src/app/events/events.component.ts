import { UpdatedNamesService } from './../updated-names.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: AuthService, private employee: UpdatedNamesService) { }
  users: any = []

  ngOnInit(): void {
    this.api.all().subscribe((res: any) => {
      this.users = res
    })
  }
  user = this.fb.group({
    name: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z ]*')]],
    email: ["",Validators.email]
  })
  delete(id: any) {
    this.api.delete(id).subscribe((res: any) => {
      this.api.all().subscribe((res: any) => {
        this.users = res
      })
    })
  }
  edit(id: any) {
    this.employee.data.id = id._id
    this.employee.data.name = id.name
    this.employee.data.email = id.email
    this.user.patchValue(this.employee.getData())
    
  }
  update() {
    this.api.edit(this.user.value, this.employee.data.id).subscribe((res: any) => {
      this.api.all().subscribe((res: any) => {
        this.users = res
      })
    })
    const close=document.getElementById('close');
    close?.click()
  }
}
