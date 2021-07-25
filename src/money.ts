import { Expression } from './internal';

export class Money implements Expression {
  protected amount: number = 0;
  protected currency: string = '';

  constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }
  
  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  plus(addend: Money): Expression {
    return new Money(addend.amount + this.amount, this.currency);
  }

  getCurrency(): string {
    return this.currency;
  }

  equals(object: Object): boolean {
    const money: Money = <Money>object;
    
    return this.amount === money.amount && this.getCurrency() === money.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}