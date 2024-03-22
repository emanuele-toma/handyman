export function b64encode(input: string): string | undefined {
  try {
    return btoa(
      encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode(parseInt(p1, 16));
      })
    );
  } catch (e) {
    return undefined;
  }
}
