const sumAll = function (start, end) {
  let numArr = [];
  if (start < 0 || end < 0) {
    return 'ERROR';
  } else if (
    Number.isInteger(start) === false ||
    Number.isInteger(end) === false
  ) {
    return 'ERROR';
  } else if (start > end) {
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
// Do not edit below this line
module.exports = sumAll;
