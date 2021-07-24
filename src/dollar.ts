import { Money } from './internal';

export class Dollar extends Money {
  
  constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}