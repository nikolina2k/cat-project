/**
 * @jest-environment jsdom
 */

import { exportedForTesting } from './index.tsx';

const { formatters } = exportedForTesting;
const dollarFormatter = formatters["Dollar"]
const dollarStringRegex = /^\$\d+([.](\d){1,2})?$/

describe("price formatters tests", () => {
    it("Validate dollar price format", () => {
        expect(dollarFormatter(1)).toMatch(dollarStringRegex)
        expect(dollarFormatter(10)).toMatch(dollarStringRegex)
        expect(dollarFormatter(100000000000)).toMatch(dollarStringRegex)
        expect(dollarFormatter(0.9999)).toMatch(dollarStringRegex)
        expect(dollarFormatter(0.0)).toMatch(dollarStringRegex)
        expect(dollarFormatter(0.00001)).toMatch(dollarStringRegex)
    });

    it("Validate dollar price value", () => {
        expect(Number.parseFloat(dollarFormatter(1).substring(1))).toBeCloseTo(1, 2)
        expect(Number.parseFloat(dollarFormatter(10).substring(1))).toBeCloseTo(10, 2)
        expect(Number.parseFloat(dollarFormatter(100000000000).substring(1))).toBeCloseTo(100000000000, 2)
        expect(Number.parseFloat(dollarFormatter(0.9999).substring(1))).toBeCloseTo(0.9999, 2)
        expect(Number.parseFloat(dollarFormatter(0.0).substring(1))).toBeCloseTo(0.0, 2)
        expect(Number.parseFloat(dollarFormatter(0.00001).substring(1))).toBeCloseTo(0.00001, 2)
    });
})