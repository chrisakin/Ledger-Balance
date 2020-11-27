import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuantityService {
  quantity = new BehaviorSubject<number>(1);
  currentQuantity = this.quantity.asObservable();

  constructor() { }

  changeQuantity(quantity: number) {
    this.quantity.next(quantity);
  }
}


// quantity = username
// currentQuantity = currentUsername
// Pawel = 1