import '@testing-library/jest-dom';
import { arrayBufferToBase64, b64decode, b64encode, base64ToArrayBuffer } from '../utils';

describe('Base64', () => {
  it('should be able to encode a string', () => {
    const input = 'hello world';
    const expected = 'aGVsbG8gd29ybGQ=';
    const output = b64encode(input);

    expect(output).toBe(expected);
  });

  it('should be able to encode emojis', () => {
    const input = '👋🌍';
    const expected = '8J+Ri/CfjI0=';
    const output = b64encode(input);

    expect(output).toBe(expected);
  });

  it('should be able to encode a buffer', () => {
    const input = Buffer.from('hello world');
    const expected = 'aGVsbG8gd29ybGQ=';
    const output = arrayBufferToBase64(input);

    expect(output).toBe(expected);
  });

  it('should be able to decode a string', () => {
    const input = 'aGVsbG8gd29ybGQ=';
    const expected = 'hello world';
    const output = b64decode(input);

    expect(output).toBe(expected);
  });

  it('should be able to decode emojis', () => {
    const input = '8J+Ri/CfjI0=';
    const expected = '👋🌍';
    const output = b64decode(input);

    expect(output).toBe(expected);
  });

  it('should be able to decode to a buffer', () => {
    const input = 'aGVsbG8gd29ybGQ=';
    const expected = new Uint8Array([104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100]).buffer;
    const output = base64ToArrayBuffer(input);

    expect(output).toEqual(expected);
  });
});
