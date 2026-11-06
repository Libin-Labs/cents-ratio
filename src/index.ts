function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
export function ratioToCents(ratio: number): number {
  return finite(1200 * Math.log2(finite(ratio, Number.MIN_VALUE)));
}
export function centsToRatio(cents: number): number {
  return finite(2 ** (finite(cents) / 1200), Number.MIN_VALUE);
}
export function intervalCents(lowHz: number, highHz: number): number {
  return finite(
    1200 *
      (Math.log2(finite(highHz, Number.MIN_VALUE)) - Math.log2(finite(lowHz, Number.MIN_VALUE))),
  );
}
