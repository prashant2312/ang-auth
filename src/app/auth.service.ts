import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  signup(data:any){
    return this.http.post<any>('http://localhost:4000/signup',data)
  }
  all(){
    return this.http.get('http://localhost:4000/all')
  }
  edit(data:any,id:any){
    return this.http.put('http://localhost:4000/update/'+id,data)
  }
  delete(id:any){
    return this.http.delete('http://localhost:4000/delete/'+id)
  }
}
