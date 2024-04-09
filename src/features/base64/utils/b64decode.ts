export function b64decode(input: string): string | undefined {
  try {
    return decodeURIComponent(
      Array.prototype.map
        .call(atob(input), function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
  } catch (e) {
    return undefined;
  }
}
