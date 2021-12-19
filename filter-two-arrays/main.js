const justCoolStuff = (arr1, arr2) => {
  const isInArr2 = (item) => {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === item) {
        return true;
      }
    }
    return false;
  };
  return arr1.filter(isInArr2);
};

const myStuff = [
  "rules",
  "fruit-by-the-foot",
  "wedgies",
  "sweaters",
  "skateboards",
  "family-night",
  "my room",
  "braces",
  "the information superhighway",
];
const coolStuff = [
  "gameboys",
  "skateboards",
  "backwards hats",
  "fruit-by-the-foot",
  "pogs",
  "my room",
  "temporary tattoos",
];

console.log(justCoolStuff(myStuff, coolStuff));
// Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]
