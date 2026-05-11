const sumAll = function (start, end) {
  let numArr = [];
  if (start > end) {
    for (let i = end; i <= start; i++) {
      numArr.push(i);
    }
  } else {
    for (i = start; i <= end; i++) {
      numArr.push(i);
    }
  }
  const reduceAll = numArr.reduce((total, currentItem) => {
    return total + currentItem;
  });
  return reduceAll;
};
// debugger;
console.log(sumAll(5, 3));
// Do not edit below this line
module.exports = sumAll;
