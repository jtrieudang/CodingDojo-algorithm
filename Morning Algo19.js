/**
 * takes in an array
 * returns THE SAME array sorted
 * compares adjacent elements
 * and swaps positions if necessary
 * largest elements "bubble" to the top
 * BONUS: fast exit if portion already sorted
 */

function bubbleSort(arr) {
    for(var i = arr.length-1; i>0; i--){
      var swapped = false;
      for(var j = 0; j<i; j++){
        if(arr[j]>arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          swapped = true;
        }
      }
      if (swapped == false){
        console.log("Ended Early!")
        return arr;
      }
    }
    return arr;
}

console.log(bubbleSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]


/**
 * takes in an array
 * returns THE SAME array sorted
 * each time through, select the smallest element
 * at the end, swap it with the element at the current position
 */

function selectionSort(arr) {
  for(var i = 0; i<arr.length; i++){
    var min = arr[i];
    var minIndex = i;
    for(var j = i+1; j<arr.length; j++){
      if (arr[j]<min){
        min = arr[j];
        minIndex = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort([1, 5, 2, 8, 3, 4]));
// should log [1, 2, 3, 4, 5, 8]

