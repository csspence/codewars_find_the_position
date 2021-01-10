/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

const position = (letter) => {
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  let index;
  for(let i = 0; i < alpha.length; i++) {
    if(alpha[i] === letter) {
      index = i + 1;
    }
  }
  return 'Position of alphabet: ' + index;
}