export function sortObject(
  obj: Record<string, unknown> | unknown[] | unknown,
  sortOrder: 'asc' | 'desc',
  sortBy: 'key' | 'value'
): Record<string, unknown> | unknown[] | unknown {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => sortObject(item, sortOrder, sortBy));
  }

  const sortedKeys = Object.keys(obj).sort((a, b) => {
    if (sortBy === 'value') {
      if (sortOrder === 'asc') {
        return String(obj[a as keyof typeof obj]).localeCompare(String(obj[b as keyof typeof obj]));
      } else {
        return String(obj[b as keyof typeof obj]).localeCompare(String(obj[a as keyof typeof obj]));
      }
    } else {
      if (sortOrder === 'asc') {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    }
  });

  const result: { [key: string]: unknown } = {};
  for (const key of sortedKeys) {
    result[key] = sortObject(
      obj[key as keyof typeof obj] as Record<string, unknown>,
      sortOrder,
      sortBy
    );
  }

  return result;
}
