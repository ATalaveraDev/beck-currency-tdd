import { Dollar, Franc } from './internal';

export abstract class Money {
  protected amount: number = 0;
  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  equals(object: Object): boolean {
    const money: Money = <Money>object;
    
    return this.amount === money.amount && money.constructor.name === this.constructor.name;
  }

  static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }
  
  static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  abstract times(multiplier: number): Money;

  getCurrency(): string {
    return this.currency;
  }
}