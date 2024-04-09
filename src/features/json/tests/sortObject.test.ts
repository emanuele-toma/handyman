import '@testing-library/jest-dom';
import { sortObject } from '../utils';

describe('sortObject', () => {
  it('should be able to sort an object by key ascending', () => {
    const input = { c: 3, a: 1, b: 2 };
    const expected = { a: 1, b: 2, c: 3 };
    const output = sortObject(input, 'asc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to sort an object by key descending', () => {
    const input = { c: 3, a: 1, b: 2 };
    const expected = { c: 3, b: 2, a: 1 };
    const output = sortObject(input, 'desc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to sort an object by value ascending', () => {
    const input = { c: 3, a: 1, b: 2 };
    const expected = { a: 1, b: 2, c: 3 };
    const output = sortObject(input, 'asc', 'value');

    expect(output).toEqual(expected);
  });

  it('should be able to sort an object by value descending', () => {
    const input = { c: 3, a: 1, b: 2 };
    const expected = { c: 3, b: 2, a: 1 };
    const output = sortObject(input, 'desc', 'value');

    expect(output).toEqual(expected);
  });

  it('should be able to sort a nested object by key ascending', () => {
    const input = { c: 3, a: 1, b: { d: 4, f: 6, e: 5 } };
    const expected = { a: 1, b: { d: 4, e: 5, f: 6 }, c: 3 };
    const output = sortObject(input, 'asc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to sort a nested object by key descending', () => {
    const input = { c: 3, a: 1, b: { d: 4, f: 6, e: 5 } };
    const expected = { c: 3, b: { f: 6, e: 5, d: 4 }, a: 1 };
    const output = sortObject(input, 'desc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to sort a nested object by value ascending', () => {
    const input = { c: 3, a: 1, b: { d: 4, f: 6, e: 5 } };
    const expected = { a: 1, b: { d: 4, e: 5, f: 6 }, c: 3 };
    const output = sortObject(input, 'asc', 'value');

    expect(output).toEqual(expected);
  });

  it('should be able to sort a nested object by value descending', () => {
    const input = { c: 3, a: 1, b: { d: 4, f: 6, e: 5 } };
    const expected = { c: 3, b: { f: 6, e: 5, d: 4 }, a: 1 };
    const output = sortObject(input, 'desc', 'value');

    expect(output).toEqual(expected);
  });

  it('should be able to handle an empty object', () => {
    const input = {};
    const expected = {};
    const output = sortObject(input, 'asc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to handle an array', () => {
    const input = [3, 1, 2];
    const expected = [3, 1, 2];
    const output = sortObject(input, 'asc', 'key');

    expect(output).toEqual(expected);
  });

  it('should be able to handle an array in an object', () => {
    const input = { a: [3, 1, 2] };
    const expected = { a: [3, 1, 2] };
    const output = sortObject(input, 'asc', 'key');

    expect(output).toEqual(expected);
  });
});
