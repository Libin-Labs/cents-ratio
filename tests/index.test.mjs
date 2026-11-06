import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('octave', () => {
  assert.equal(api.ratioToCents(2), 1200);
  assert.equal(api.centsToRatio(1200), 2);
});
test('perfect fifth', () => {
  assert.ok(Math.abs(api.ratioToCents(1.5) - 701.9550008653874) < 1e-10);
});
test('reverse interval', () => {
  assert.equal(api.intervalCents(880, 440), -1200);
});
test('extreme ratio avoided', () => {
  assert.ok(Number.isFinite(api.intervalCents(1e-300, 1e300)));
});
test('invalid inputs', () => {
  assert.throws(() => api.ratioToCents(0));
  assert.throws(() => api.centsToRatio(1e9));
  assert.throws(() => api.intervalCents(-1, 1));
});
test('semitone composition', () => {
  for (let n = -100; n <= 100; n++) {
    assert.ok(Math.abs(api.ratioToCents(api.centsToRatio(n * 100)) - n * 100) < 1e-10);
  }
});
