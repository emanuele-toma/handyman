import crypto from 'crypto';

export function sha1encode(input: string): string | undefined {
  try {
    return crypto.createHash('sha1').update(input).digest('hex');
  } catch (e) {
    return undefined;
  }
}
