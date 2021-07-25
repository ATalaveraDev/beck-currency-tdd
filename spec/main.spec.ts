import { Franc, Money } from '../src/internal';

describe('Currency', () => {
  it('Multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2).equals(Money.dollar(10))).toEqual(true);
    expect(five.times(3).equals(Money.dollar(15))).toEqual(true);
  });

  it('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  });

  it('Franc Multiplication', () => {
    const five: Franc = Money.franc(5);
    
    expect(five.times(2).equals(Money.franc(10))).toEqual(true);
    expect(five.times(3).equals(Money.franc(15))).toEqual(true);
  });

  it('Currency', () => {
    expect('USD').toEqual(Money.dollar(1).getCurrency());
    expect('CHF').toEqual(Money.franc(1).getCurrency());
  });
});
