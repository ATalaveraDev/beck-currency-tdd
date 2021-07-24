import { Money } from './internal';

export class Franc extends Money {  
  
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}