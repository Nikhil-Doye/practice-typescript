export function decodedValue(colors: string[]) {
  // throw new Error('Remove this line and implement the function')
  let res = 0

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
  
  for (const color of colors.slice(0,2)){
    res = res*10 + COLORS.indexOf(color);
  }

  return res;
}
