export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const binary = new Uint8Array(buffer);
  let result = '';
  for (let i = 0; i < binary.byteLength; i++) {
    result += String.fromCharCode(binary[i]);
  }
  return btoa(result);
}
