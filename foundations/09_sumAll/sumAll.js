const sumAll = function (stRange, endRange) {
  let numArr = [];
  for (let i = stRange; i <= endRange; i++) {
    numArr.push(i);
  }
  console.log(numArr.sort());
  const reduceAll = numArr.reduce((total, currentItem) => {
    return total + currentItem;
  });
  return reduceAll;
};
// debugger;
console.log(sumAll(5, 3));
// Do not edit below this line
module.exports = sumAll;
