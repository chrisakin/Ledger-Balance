import { Component, OnInit } from '@angular/core';
import { AmountService } from '../amount.service';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-vault-header',
  templateUrl: './vault-header.component.html',
  styleUrls: ['./vault-header.component.css']
})
export class VaultHeaderComponent implements OnInit {

  amount: any;
  till: any;
  //total = this.totals;
  amountes: any = 1000000;

  vaultTotal: any = 50000000;
  total: any = this.vaultTotal - this.amountes
  zeta: any = 100000;
  
  
  zero = 0.00;
 
  btnDisabled = false;

  constructor(private quantityService: QuantityService,
              private amounts: AmountService) { }

  

  async ngOnInit() {
    try {
      const data = await this.amounts.get(
        'https://blessingledger.herokuapp.com/api/till'
      );
      data['success']
        ? (this.till = data['till'])
       : console.log("Amount Gotten")
    } catch (error) {
      console.log("Unable to get amount");
    }
    
    console.log(this.realAmount)
    console.log(this.realAmount.amount)
    
  }

  get realAmount(){
  
   return this.till[this.till.length - 1];
  }

  get totals(){
    return (this.vaultTotal - this.realAmount.amount)
    
  }
  
  async approve(){
    
    window.alert("Balance moved to Stanbic Ledger Account")
    this.zeta = this.zero

    try {  
    
      const data = await this.amounts.post(
       'https://blessingledger.herokuapp.com/api/stanbic',
       {amount:this.totals}
     ); 
     data['success']
     console.log("Money successfully transferred")
      
       } catch (error) {
         console.log("Money couldnt be transferred")
             }
             this.btnDisabled = false;
  }

  reject(){
    window.alert("Approval Rejected")
    this.total = this.total

  }
}
