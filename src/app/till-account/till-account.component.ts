import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-till-account',
  templateUrl: './till-account.component.html',
  styleUrls: ['./till-account.component.css']
})
export class TillAccountComponent implements OnInit {
  tillTotal: any = 0;
  quantities: any;
  btnDisabled = false;

  constructor() { }

  ngOnInit() {
   this.tillTotal
   
  }

  alert(){
    window.alert("Your vault withdrawal request has been approved by your Head of Operations");
  }

 total(){
  this.tillTotal=this.quantities
 }

  request(){
    this.btnDisabled = true;
    //this.alert()
    setTimeout(this.alert.bind(this), 2000);
    setTimeout(this.total.bind(this), 3000);
   
  
    
  }
}
