import crypto from 'crypto';

export function shaEncode(
  algorithm: 'sha1' | 'sha256' | 'sha512',
  input: string,
  hmac?: string
): string | undefined {
  try {
    if (hmac) {
      return crypto.createHmac(algorithm, hmac).update(input).digest('hex');
    } else {
      return crypto.createHash(algorithm).update(input).digest('hex');
    }
  } catch (e) {
    return undefined;
  }
}
