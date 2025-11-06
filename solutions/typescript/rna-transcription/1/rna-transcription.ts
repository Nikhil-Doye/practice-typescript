export function toRna(Dna: string): string {
  // throw new Error('Remove this line and implement the function')
  let res = []; 
  for (let char of Dna){
    if (char == 'G'){
      res.push('C');
    }
    else if (char == 'C'){
      res.push('G');
    }
    else if (char == 'T'){
      res.push('A');
    }
    else if (char == 'A'){
      res.push('U');
    }
    else{
      throw new Error('Invalid input DNA.')
    }
  }

  return res.join('');
}
