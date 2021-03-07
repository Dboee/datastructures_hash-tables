


// My Naive Attempt, worse time complexity, better space complexity
let firstrecurringDelight = (array) => {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < i; j++) {
      if (array[i] == array[j]) {
        return array[i];
      }
    }
  }
  return undefined;
};



// solution with hash table, better time complexity, worse space complexity
let firstrecurring = (input) => {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
};



module.exports = firstrecurringDelight;