import crypto from 'crypto';

export function arrayBufferToSha(buffer: ArrayBuffer, algorithm: 'sha1' | 'sha256' | 'sha512') {
  const hash = crypto.createHash(algorithm);
  hash.update(Buffer.from(buffer));
  return hash.digest('hex');
}
