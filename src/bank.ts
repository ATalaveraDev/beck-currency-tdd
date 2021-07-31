import { Expression, Money, Pair } from './internal';

export class Bank {
  private rates: Array<{ from: string, to: string, value: number}>;

  constructor() {
    this.rates = [];
  }

  reduce(source: Expression, to: string): Money {    
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.push({ from, to, value: rate });
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;

    const rate: number = this.rates.filter(rate => rate.from === from && rate.to === to)[0].value;
    
    return rate;
  }
}