import { Dollar, Franc, Money } from "../src/internal";

describe('Currency', () => {
  it('Multiplication', () => {
    const five: Money = Money.dollar(5);

    expect(five.times(2)).toEqual(new Dollar(10));
    expect(five.times(3)).toEqual(new Dollar(15));
  });

  it('Equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toEqual(true);
    expect(new Dollar(5).equals(new Dollar(6))).toEqual(false);
    expect(new Franc(5).equals(new Franc(5))).toEqual(true);
    expect(new Franc(5).equals(new Franc(6))).toEqual(false);
    expect(new Franc(5).equals(new Dollar(5))).toEqual(false);
  });

  it('Franc Multiplication', () => {
    const five: Franc = new Franc(5);
    
    expect(five.times(2)).toEqual(new Franc(10));
    expect(five.times(3)).toEqual(new Franc(15));
  });
})
