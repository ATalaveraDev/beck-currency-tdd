export class Pair {
  private from: string;
  private to: string;

  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  equals(object: Object): boolean {
    const pair: Pair = <Pair>object;

    return this.from === pair.from && this.to === pair.to;
  }

  hashCode(): number {
    return 0;
  }
}