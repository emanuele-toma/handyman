import crypto from 'crypto';

export function arrayBufferToSha(
  buffer: ArrayBuffer,
  algorithm: 'sha1' | 'sha256' | 'sha512',
  hmac?: string
): string {
  if (hmac) {
    return crypto.createHmac(algorithm, hmac).update(Buffer.from(buffer)).digest('hex');
  } else {
    return crypto.createHash(algorithm).update(Buffer.from(buffer)).digest('hex');
  }
}
