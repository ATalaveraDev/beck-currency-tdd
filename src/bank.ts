import { Expression, Money, Pair } from './internal';

export class Bank {
  private rates: Map<Pair, number>;

  constructor() {
    this.rates = new Map();
  }

  reduce(source: Expression, to: string): Money {    
    return source.reduce(this, to);
  }

  addRate(from: string, to: string, rate: number) {
    this.rates.set(new Pair(from, to), rate);
  }

  rate(from: string, to: string): number {
    if (from === to) return 1;

    const rate: number = <number>this.rates.get(new Pair(from, to));
    console.log(this.rates)
    return rate;
  }
}