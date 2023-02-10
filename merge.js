function merge(arr1, arr2) {
  const result = [];

  let idx1 = 0;
  let idx2 = 0;

  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] <= arr2[idx2]) {
      result.push(arr1[idx1]);
      idx1++
    } else {
      result.push(arr2[idx2]);
      idx2++
    }
  }

  while (idx1 < arr1.length) {
    result.push(arr1[idx1]);
    idx1++
  }

  while (idx2 < arr2.length) {
    result.push(arr2[idx2]);
    idx2++
  }

  return result;
}

function mergeSort(arr) {

  if (arr.length <= 1) return arr;

  const halfIdx = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, halfIdx);
  const rightHalf = arr.slice(halfIdx);

  const leftArr = mergeSort(leftHalf);
  const rightArr = mergeSort(rightHalf);

  return merge(leftArr, rightArr)
}

module.exports = { merge, mergeSort};
