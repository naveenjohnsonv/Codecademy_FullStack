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
  static generateField(r,c,poh) {
    let arr = Array.from(Array(r), () => new Array(c));
    for(let i=0;i<r;i++)
      for(let j=0;j<c;j++)
        arr[i][j] = fieldCharacter;
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    arr[0][0] = pathCharacter;
    arr[getRandomInt(r)][getRandomInt(c)]=hat;
    let holes = Math.floor((poh/100)*r*c)
    while(holes) {
      let tr = getRandomInt(r);
      let tc = getRandomInt(c);
      if(arr[tr][tc]!=pathCharacter && arr[tr][tc]!=hat && arr[tr][tc]!=hole) {
        arr[tr][tc] = hole;
        holes--;
      }
    }
    return arr;
  }
}

const myField = new Field(Field.generateField(10,10,30));

let r = 0;
let c = 0;
let f = 0;

do {
  myField.print();
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
  }
}
while(!f);