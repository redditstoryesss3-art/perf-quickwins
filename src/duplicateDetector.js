export function findUniqueValues(values) {
  return values.filter((value) => values.indexOf(value) === values.lastIndexOf(value));
}
