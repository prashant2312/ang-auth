import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdatedNamesService {
  data={
    id:'',
    name:"",
    email:""
  }
  constructor() { }
  setdata(data:any){
    this.data=data
  }
  getData(){
    return this.data
  }
}
