// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return (pAequor = {
    specimenNum: number,
    dna: array,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      let newRandBase = returnRandBase();
      // have to change the current base to a different one
      while (array[randomIndex] === newRandBase) {
        newRandBase = returnRandBase();
      }
      //return this.dna.splice(randomIndex, 1, newRandBase);
      this.dna.splice(randomIndex, 1, newRandBase);
      return [`mutated: ${this.dna}`];
    },
    compareDNA(pAequor) {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === pAequor[i]) {
          counter++;
        }
      }
      return `${((counter / 15) * 100).toFixed(0)}%`;
    },
    willLikelySurvive() {
      counterC = 0;
      counterG = 0;
      for (let i = 0; i < this.dna.length; i++) {
        switch (this.dna[i]) {
          case "C":
            counterC++;
            break;
          case "G":
            counterG++;
            break;
        }
      }
      if ((((counterC + counterG) / 15) * 100).toFixed(0) >= 60) {
        return true;
      } else {
        return false;
      }
    },
  });
};

const specimen0 = mockUpStrand();


const specimen1 = pAequorFactory(1, mockUpStrand());
console.log(specimen1);
console.log(specimen1.mutate());
console.log(specimen1.compareDNA(specimen0));
console.log(specimen1.willLikelySurvive());

const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen2);
console.log(specimen2.mutate());
console.log(specimen2.compareDNA(specimen0));
console.log(specimen2.willLikelySurvive());


const requestedSpecimen = [];

let i = 0;
while (i < 30) {
  if (pAequorFactory(i, mockUpStrand()).willLikelySurvive() === true) {
    requestedSpecimen.push(pAequorFactory(i, mockUpStrand()).dna);
    i++;
  } 
}
console.log(requestedSpecimen);








