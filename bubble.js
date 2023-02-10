function bubbleSort(arr) {
  // loop through arr -- i
    // loop through arr from i to arr.length - 1
    // compare i and j and swap accordingly

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        const left = arr[i];
        arr[i] = arr[j];
        arr[j] = left;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
