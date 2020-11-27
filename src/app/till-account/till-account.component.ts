import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-till-account',
  templateUrl: './till-account.component.html',
  styleUrls: ['./till-account.component.css']
})
export class TillAccountComponent implements OnInit {
  @Input() quantities: any = [];
@Output()  quantityChanged = new EventEmitter<any>();

  tillTotal: any = 0;
 
  btnDisabled = false;

  constructor(private quantityService: QuantityService) { }

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
    this.quantityChanged.emit(this.quantities);
    this.quantityService.changeQuantity(this.quantities);
   
  
    
  }
}
