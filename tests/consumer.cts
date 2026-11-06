import { ratioToCents, centsToRatio } from '@lp-labs/cents-ratio';
if (ratioToCents(2) !== 1200 || centsToRatio(1200) !== 2) throw new Error('Cents');
// @ts-expect-error invalid argument must be rejected by declarations
ratioToCents('2');
