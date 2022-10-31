const units = ["kg", "hg", "dag", "g", "dg", "cg", "mg"];

export function convert(value: number, from: string, to: string): number {
  const fromIndex = units.indexOf(from);
  const toIndex = units.indexOf(to);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

console.log(convert(10, 'kg', 'dag'));