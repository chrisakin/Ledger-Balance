import { Component, OnInit } from '@angular/core';
import { AmountService } from '../amount.service';

@Component({
  selector: 'app-stanbic',
  templateUrl: './stanbic.component.html',
  styleUrls: ['./stanbic.component.css']
})
export class StanbicComponent implements OnInit {
  stanbic: any;
  total: any = 40000000;
  
  constructor(private amounts: AmountService) { }

  async ngOnInit() {
    try {
      const data = await this.amounts.get(
        'https://blessingledger.herokuapp.com/api/stanbic'
      );
      data['success']
        ? (this.stanbic = data['stanbic'])
       : console.log("Amount Gotten")
    } catch (error) {
      console.log("Unable to get amount");
    }
    
    
    
  }

  get realAmount(){
  
    return this.stanbic[this.stanbic.length - 1];
   }
 
   get totals(){
     
     return this.total += this.realAmount.amount
     
   }
}
