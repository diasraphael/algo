function arrayPairs(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= i; j++) {
      console.log('The pair is', arr[i], arr[j]);
    }
  }
}
arrayPairs([1, 2, 3, 4, 5, 6]);
function arrayPairsNew(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      console.log('The pair is', arr[i], arr[j]);
    }
  }
}
arrayPairsNew([1, 2, 3, 4, 5, 6]);
