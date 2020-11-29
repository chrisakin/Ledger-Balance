import { Component, OnInit,EventEmitter, Output,Input } from '@angular/core';
import { AmountService } from '../amount.service';
import { QuantityService } from '../quantity.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-till-account',
  templateUrl: './till-account.component.html',
  styleUrls: ['./till-account.component.css']
})
export class TillAccountComponent implements OnInit {
  amount: any;
  amountForm: FormGroup;
   submitted = false;

  tillTotal: any = 0;
 
  btnDisabled = false;

  constructor(private quantityService: QuantityService,
                private amounts: AmountService,
                private formBuilder: FormBuilder) { 

                  this.amountForm = this.formBuilder.group({
                    amount: [0, [
                      Validators.required,
                      Validators.minLength(7)
                    ]],
                  });
                }

  ngOnInit() {
   this.tillTotal

  
  }

 

  alert(){
    window.alert("Your vault withdrawal request has been approved by your Head of Operations");
  }

 total(){
  this.tillTotal=this.amount

 }

  async request(){
    this.btnDisabled = true;

    if(this.amount < 1000000){
     
       
    
    //this.alert()
    setTimeout(this.alert.bind(this), 2000);
    setTimeout(this.total.bind(this), 3000);
    let totale = 50000000
    //console.log(totale)
    try {  
      
     const data = await this.amounts.post(
      'https://blessingledger.herokuapp.com/api/till',
      {amount:this.amount,
      totale}
      
    ); 
   
    data['success']
    console.log("Money successfully transferred")
     
      } catch (error) {
        console.log("Money couldnt be transferred")
            }
            this.btnDisabled = false;
   
          }
          else{
            this.btnDisabled = true;
          }
    
  }
}
