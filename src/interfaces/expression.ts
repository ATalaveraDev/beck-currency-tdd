import { Money } from '../internal';

export interface Expression {
  reduce(to: string): Money;
}