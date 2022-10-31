const units = ["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"];

export function convert(value: number, from: string, to: string): number {
  const fromIndex = units.indexOf(from);
  const toIndex = units.indexOf(to);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

console.log(convert(100, 'km²', 'dam'));