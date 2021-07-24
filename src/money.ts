import { Dollar, Franc } from './internal';

export class Money {
  protected amount: number = 0;
  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = <Money>object;
    
    return this.amount === money.amount && this.getCurrency() === money.currency;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }
  
  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  getCurrency(): string {
    return this.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}