const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } else if (start > end) {
      let tmp = 0;
      tmp = start;
      start = end;
      end = tmp;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },
  words(string) {
    return (words = string.split(" "));
  },
  pad(string, len) {
    if (!(len > string.length)) {
      return string;
    }
    const startPaddingLength = Math.floor((len - string.length) / 2);
    const endPaddingLength = len - string.length - startPaddingLength; // line where I made a mistake
    const paddedString =
      " ".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    const hasValue = object[key];
    if (hasValue !== undefined) {
      return true;
    }
    return false;
  },
  invert(object) {
    let invertedObject = {};
    for (let property in object) {
      const originalValue = object[property];
      invertedObject[originalValue] = property;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let property in object) {
      let value = object[property];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return property;
      }
    }
    return undefined;
  },
  drop(array, number) {
    if (!number) {
      number = 1;
    }
    let droppedArray = array.slice(number);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex(
      (element, index) => !predicate(element, index, array)
    );
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    //if (!size) {
    //  size = 1;
    //}
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};
;


// Do not write or modify code below this line.
module.exports = _;
