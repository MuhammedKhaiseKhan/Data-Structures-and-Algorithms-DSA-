
////////////////////! Linear Search

// function linearSearch (arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// //Big-O = O(n)
 
// console.log(linearSearch([2,3,4,7,8,],8));
// console.log(linearSearch([9,4,7,-5,1,],2));



//////////////////! Binary Search

function binarySearch (arr, target){
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
            return middleIndex
        }       
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1
        }else
        leftIndex = middleIndex + 1
    }
    return -1;
}

// //Big-O = O(logn)

// console.log(binarySearch([2,3,4,7,8,],8));
// console.log(binarySearch([9,4,7,-5,1,],2));


//////////////! Recursive Binary Search

function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length-1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === arr[middleIndex]){
        return middleIndex
    }

    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex-1)
    }else{
        return search(arr, target, middleIndex+1, rightIndex)
    }
}

// Big-O = O(logn)

console.log(recursiveBinarySearch([2,3,4,7,8,],8));
console.log(recursiveBinarySearch([9,4,7,-5,1,],11));

