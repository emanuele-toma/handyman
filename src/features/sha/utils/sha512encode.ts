import crypto from 'crypto';

export function sha512encode(input: string): string | undefined {
  try {
    return crypto.createHash('sha512').update(input).digest('hex');
  } catch (e) {
    return undefined;
  }
}
