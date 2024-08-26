//!  Bubble Sort 

// function bubbleSort(arr){
//     let swapped
//     do {
//         swapped = false
//         for(let i = 0; i < arr.length -1; i++){
//             if(arr[i] > arr[i+1]){
//                 let temp = arr[i]
//                 arr[i] = arr[i+1]
//                 arr[i+1] = temp
//                 swapped = true
//             }
//         }
//     } while(swapped)
    
// }

// const arr = [8,20,-2,4,-6]
// bubbleSort(arr)
// console.log(arr);

// //Big-O = O(n^2)


//! Insertion Sort

// function InsertionSort (arr){
//     for(let i = 0; i < arr.length; i++){
//         let numberToInsert = arr[i]
//         let j = i -1
//         while(j >= 0 && arr[j] > numberToInsert){
//             arr[j+1] = arr[j]
//             j = j-1
//         }
//         arr[j+1] = numberToInsert
//     }
// }

// const arr = [8,20,-2,4,-6]
// InsertionSort(arr)
// console.log(arr);

// //Big-O = O(n^2)

//! Quick sort

// function quickSort(arr) {
//     if (arr.length < 2 ) {
//         return arr
//     }
//     let pivot = arr[arr.length -1]
//     let left = []
//     let right = []
//     for(let i = 0; i < arr.length -1; i++){
//         if(arr[i] < pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }


// const arr = [8,20,-2,4,-6]
// console.log(quickSort(arr));

//Worst case - O(n^2)
// Avg case - O(nlogn)

// ! Merge sort

function mergeSort(arr) {
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr ,rightArr){
    const sortedArr = []
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr));

// //Big-O - O(nlogn) this is one of the best time complexity you can get when sorting


//! Selection Sort

// function selectionSort(arr) {
//     let n = arr.length;

//     for (let i = 0; i < n - 1; i++) {
//         // Find the minimum element in unsorted portion
//         let minIndex = i;

//         for (let j = i + 1; j < n; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }

//         // Swap the found minimum element with the first element of unsorted portion
//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }

//     return arr;
// }

// // Example usage
// let array = [64, 25, 12, 22, 11];
// console.log("Sorted array:", selectionSort(array));
