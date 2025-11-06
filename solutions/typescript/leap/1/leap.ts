export function isLeap(year: number): boolean {
  // throw new Error('Remove this line and implement the function')

  if (year % 400 == 0){
    return true;
  }

  else if (year % 100 == 0){
    return false;
  }

  else if (year % 4 == 0){
    return true;
  }

  return false;
}
