export function findUniqueValues(values) {
  const counts = new Map();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  const result = [];

  for (const value of values) {
    if (counts.get(value) === 1) {
      result.push(value);
    }
  }

  return result;
}
