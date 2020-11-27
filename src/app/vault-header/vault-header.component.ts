import { Component, OnInit } from '@angular/core';
import { QuantityService } from '../quantity.service';

@Component({
  selector: 'app-vault-header',
  templateUrl: './vault-header.component.html',
  styleUrls: ['./vault-header.component.css']
})
export class VaultHeaderComponent implements OnInit {
  quantities: any = 1000000;
  vaultTotal: any = 5000000;
  total: any = this.vaultTotal - this.quantities
  
  
  zero = this.vaultTotal - this.vaultTotal;
 
  btnDisabled = false;
  constructor(private quantityService: QuantityService,) { }

  

  async ngOnInit() {
    //this.quantityService.currentQuantity.subscribe(quantities => this.quantities = quantities);
  
  }

 

  approve(){
    window.alert("Balance moved to Stanbic Ledger Account")
    this.total = this.zero
  }

  reject(){
    window.alert("Approval Rejected")
    this.total = this.total

  }
}
