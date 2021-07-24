import { Dollar, Franc, Money } from '../src/internal';

describe('Currency', () => {
  it('Multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2)).toEqual(Money.dollar(10));
    expect(five.times(3)).toEqual(Money.dollar(15));
  });

  it('Equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toEqual(true);
    expect(Money.dollar(5).equals(Money.dollar(6))).toEqual(false);
    expect(Money.franc(5).equals(Money.franc(5))).toEqual(true);
    expect(Money.franc(5).equals(Money.franc(6))).toEqual(false);
    expect(Money.franc(5).equals(Money.dollar(5))).toEqual(false);
  });

  it('Franc Multiplication', () => {
    const five: Franc = Money.franc(5);
    
    expect(five.times(2)).toEqual(Money.franc(10));
    expect(five.times(3)).toEqual(Money.franc(15));
  });

  it('Currency', () => {
    expect('USD').toEqual(Money.dollar(1).getCurrency());
    expect('CHF').toEqual(Money.franc(1).getCurrency());
  });
})
