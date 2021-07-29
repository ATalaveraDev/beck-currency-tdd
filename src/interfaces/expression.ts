import { Bank, Money } from '../internal';

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}