export function decodedResistorValue(colors: string[]): string {
  const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  // First two digits → value
  const value =
    COLORS.indexOf(colors[0]) * 10 +
    COLORS.indexOf(colors[1]);

  // Multiplier (how many zeros)
  const zeros = COLORS.indexOf(colors[2]);

  // Compute full number
  const total = value * Math.pow(10, zeros);

  if (total >= 1_000_000_000) {
    return `${total / 1_000_000_000} gigaohms`;
  } else if (total >= 1_000_000) {
    return `${total / 1_000_000} megaohms`;
  } else if (total >= 1_000) {
    return `${total / 1_000} kiloohms`;
  } else {
    return `${total} ohms`;
  }
}
