import '@testing-library/jest-dom';
import { shaEncode } from '../utils';

describe('SHA-1', () => {
  it('should be able to hash a string', () => {
    const input = 'hello world';
    const expected = '2aae6c35c94fcfb415dbe95f408b9ce91ee846ed';
    const output = shaEncode('sha1', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis', () => {
    const input = '👋🌍';
    const expected = '6fab33dc3969d2fe7f273b3a8e640e34343fe46e';
    const output = shaEncode('sha1', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash a string with a key', () => {
    const input = 'hello world';
    const key = 'secret';
    const expected = '03376ee7ad7bbfceee98660439a4d8b125122a5a';
    const output = shaEncode('sha1', input, key);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis with a key', () => {
    const input = '👋🌍';
    const key = 'secret';
    const expected = 'e93ecd1558d0ff1965079a9697830d350c9a2c83';
    const output = shaEncode('sha1', input, key);

    expect(output).toBe(expected);
  });
});

describe('SHA-256', () => {
  it('should be able to hash a string', () => {
    const input = 'hello world';
    const expected = 'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9';
    const output = shaEncode('sha256', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis', () => {
    const input = '👋🌍';
    const expected = '61b26d42f28e2b47031d3591c4d97a7dbb7910d2b58f52c43913c8b8736572b3';
    const output = shaEncode('sha256', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash a string with a key', () => {
    const input = 'hello world';
    const key = 'secret';
    const expected = '734cc62f32841568f45715aeb9f4d7891324e6d948e4c6c60c0621cdac48623a';
    const output = shaEncode('sha256', input, key);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis with a key', () => {
    const input = '👋🌍';
    const key = 'secret';
    const expected = 'd13ca15f7ea9f77b8c1c1bf43a8f8c36645559292bfad5dd2feac3ddd5ca1fe5';
    const output = shaEncode('sha256', input, key);

    expect(output).toBe(expected);
  });
});

describe('SHA-512', () => {
  it('should be able to hash a string', () => {
    const input = 'hello world';
    const expected =
      '309ecc489c12d6eb4cc40f50c902f2b4d0ed77ee511a7c7a9bcd3ca86d4cd86f989dd35bc5ff499670da34255b45b0cfd830e81f605dcf7dc5542e93ae9cd76f';
    const output = shaEncode('sha512', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis', () => {
    const input = '👋🌍';
    const expected =
      'ee0441ede17b660b92e260b7845e711ad44b368f765ab0b4791f8f65c402dfe4501ecc525b952670661b5a3e10f9b3c6638930630029111959ff5e65ccb50bf1';
    const output = shaEncode('sha512', input);

    expect(output).toBe(expected);
  });

  it('should be able to hash a string with a key', () => {
    const input = 'hello world';
    const key = 'secret';
    const expected =
      '6d32239b01dd1750557211629313d95e4f4fcb8ee517e443990ac1afc7562bfd74ffa6118387efd9e168ff86d1da5cef4a55edc63cc4ba289c4c3a8b4f7bdfc2';
    const output = shaEncode('sha512', input, key);

    expect(output).toBe(expected);
  });

  it('should be able to hash emojis with a key', () => {
    const input = '👋🌍';
    const key = 'secret';
    const expected =
      '50bb661c827223017e690be58d748064d11691c40b9a1b05ad3a2e629cc84ad11b576cbe069ac03fef67397645458ec79e64b88b302a1228d8b855691be75091';
    const output = shaEncode('sha512', input, key);

    expect(output).toBe(expected);
  });
});
