import crypto from 'crypto';

export function sha256encode(input: string): string | undefined {
  try {
    return crypto.createHash('sha256').update(input).digest('hex');
  } catch (e) {
    return undefined;
  }
}
