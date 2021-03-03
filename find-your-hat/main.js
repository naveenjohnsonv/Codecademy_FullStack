const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
  }
  print() {
    console.log(this.field.map(i => i.join('')).join('\n'));
  }

}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);

let r = 0;
let c = 0;
let f = 0;

do {
  let input = prompt('Which way ([u]p/[d]own/[l]eft/[r]ight)? ');
  switch(input) {
    case 'u':
    case 'U':
      r--;
      break;
    case 'd':
    case 'D':
      r++;
      break;
    case 'r':
    case 'R':
      c++;
      break;
    case 'l':
    case 'L':
      c--;
      break;
  }
  if(r < 0 || r >= myField.field.length || c < 0 || c >= myField.field[0].length) {
    console.log('Out of bounds instruction! Try again.');
    f++;
  }
  else
  if(myField.field[r][c]===hole) {
    console.log('Sorry, you fell into a hole! Try again.');
    f++;
  }
  else
  if(myField.field[r][c]===hat) {
    console.log('Congrats, you found the hat!');
    f++;
  }
  else {
    myField.field[r][c] = pathCharacter;
    myField.print();
  }
}
while(!f);