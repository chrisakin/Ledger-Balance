import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vault-header',
  templateUrl: './vault-header.component.html',
  styleUrls: ['./vault-header.component.css']
})
export class VaultHeaderComponent implements OnInit {
  total: any = 5000000;
  zero = this.total - this.total;
  btnDisabled = false;
  constructor() { }

  ngOnInit() {
     
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
