import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dot:any
  remain:any
  button:any
  hidden(){
    this.dot=document.getElementById('dot')
    this.remain=document.getElementById('remain')
    this.button=document.getElementById('btn')
    if(this.dot.style.display==="none"){
      this.dot.style.display="inline"
      this.button.innerHTML="Show More"
      this.remain.style.display="none"
    }
    else{
      this.dot.style.display="none"
      this.button.innerHTML="Show Less"
      this.remain.style.display="inline"
    }
  }
}
