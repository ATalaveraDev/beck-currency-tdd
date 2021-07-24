import { Money } from './internal';

export class Franc extends Money {  
  
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }
}