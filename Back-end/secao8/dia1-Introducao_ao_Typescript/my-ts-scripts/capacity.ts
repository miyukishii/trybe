const units = ["kl", "hl", "dal", "l", "dl", "cl", "ml"];

export function convert(value: number, from: string, to: string): number {
  const fromIndex = units.indexOf(from);
  const toIndex = units.indexOf(to);
  const exponent = (toIndex - fromIndex);

  return value * Math.pow(10, exponent);
};

console.log(convert(10, 'kl', 'dal'));