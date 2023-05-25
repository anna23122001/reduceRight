'use strict'
function myReduceRight(arr, callback, startValue){
    let result;
    if(startValue){
      result = startValue;
      for(let i = 0; i <= arr.length - 1; i++){
        result = callback(result, arr[i], i, arr)
    }
    }else{
    result = arr[arr.length - 1];
    for(let i = 0; i <= arr.length - 2 ; i++){
        result = callback(result, arr[i], i, arr)
        }
    }
    
    return result; 
}
const array = [1, 2, 3, 4, 5];

console.log(myReduceRight(array, (a,b) => a + b)) 

