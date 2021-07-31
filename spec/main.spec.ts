import { Bank, Expression, Money, Sum } from '../src/internal';

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
    const five: Money = Money.franc(5);
    
    expect(five.times(2).equals(Money.franc(10))).toEqual(true);
    expect(five.times(3).equals(Money.franc(15))).toEqual(true);
  });

  it('Currency', () => {
    expect('USD').toEqual(Money.dollar(1).getCurrency());
    expect('CHF').toEqual(Money.franc(1).getCurrency());
  });

  it('Simple Addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');

    expect(Money.dollar(10)).toEqual(reduced);
  });

  it('Plus Returns Sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum: Sum = <Sum>result;

    expect(five).toEqual(sum.augend);
    expect(five).toEqual(sum.addend);
  });

  it('Reduce Sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');

    expect(Money.dollar(7)).toEqual(result);
  });

  it('Reduce Money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');

    expect(Money.dollar(1)).toEqual(result);
  });

  it('Reduce Money Different Currency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);
    const result: Money = bank.reduce(Money.franc(2), 'USD');

    expect(Money.dollar(1)).toEqual(result);
  });

  it('Identity Rate', () => {
    expect(1).toEqual(new Bank().rate('USD', 'USD'));
  });
});
