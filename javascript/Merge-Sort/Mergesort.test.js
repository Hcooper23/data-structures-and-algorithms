// Test Case 1: Random array
const arr1 = [9, 3, 17, 6, 5];
mergeSort(arr1);
console.log(arr1); // Output: [3, 5, 6, 9, 17]

// Test Case 2: Empty array
const arr2 = [];
mergeSort(arr2);
console.log(arr2); // Output: []

// Test Case 3: Already sorted array
const arr3 = [1, 2, 3, 4, 5];
mergeSort(arr3);
console.log(arr3); // Output: [1, 2, 3, 4, 5]

// Test Case 4: Array with duplicate elements
const arr4 = [5, 3, 7, 1, 5, 3];
mergeSort(arr4);
console.log(arr4); // Output: [1, 3, 3, 5, 5, 7]

// Test Case 5: Large array
const arr5 = [9, 12, 4, 15, 2, 17, 1, 8];
mergeSort(arr5);
console.log(arr5); // Output: [1, 2, 4, 8, 9, 12, 15, 17]
