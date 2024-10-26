//1. Reverse a string using Recursion 
//-> 

function reverse(str) {
    if (str.length<=1){
        return str;
}
return str[str.length -1] + reverse(str.slice(0,-1));
// -1 means we set the range from right side. -1 is one position from right excluding it.
// In every recursion we return last element and pop off last element from the str.
// So reverse(str.slice(0,-1)) returns 2nd last, then 3rd last, then 4th last till it reach 1st.
}

console.log(reverse("average"));

//2. Find all pairs with a given sum in an array. 

function Pairswithsum(arr, targetsum){
    let seenNumbers= new Set();
    let pairs= [];

    for (let num of arr) {
        let target= targetsum- num;
        if (seenNumbers.has(target)){
            pairs.push([target, num]);
        }
        seenNumbers.add(num);
    }
    return pairs;
}

console.log(Pairswithsum([1,3,2,4,5,6,-1,7],6));

//3. Implement Binary Search in Sorted Aray. 

// Binary sort only works in sorted array. For unsorted u have to sort it first.
// Depending on where the target is located we move either the right or left pointer
// till the window shrinks around target and mid==target.

function Binaryseach(arr, target){
    let left= 0 ;
    let right = arr.length -1 ;

    while( left <= right){
        const mid= Math.floor((left + right) / 2);
        if(arr[mid] === target){
            return mid;
        }
        if (arr[mid]> target){
            right= mid -1; 
        }
        else{ 
            left= mid+1; 
        }
    }
  return -1;
}
console.log (Binaryseach([1,3,2,4,5,6], 5));

//4. Sort an array using Bubble Sort

// We push largest number to the end, then exclude that element in next loop.
// i loop contains mutiple j loops which keep pushing largest to the end by swapping.

function bubbleSort(arr){
    const n= arr.length;
    for (let i=0; i<n ; i++){
        for (let j=0; j<n-i-1; j++){

            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
                // swapping without temp
            }
        }
    }

return arr;
}
console.log(bubbleSort([64,34,56,7,34,234,1]));

//5. Find the first repeat element in an array 
// Can be done with object mapping also but no need when you have includes()
function findFirstRepeatedElement(arr) {
    const seen = []; 

    for (let i = 0; i < arr.length; i++) {
        if (seen.includes(arr[i])) {
            return arr[i]; 
        }
        seen.push(arr[i]); 
    }

    return null;
}


console.log(findFirstRepeatedElement([3,5,6,7,3,2,5,3,3]));

//6. Remove duplicates from an array.

// If unique array doesnt include element then only push.

function duplicates(arr){
    let uniqueArr= [];
      for ( let i of arr){
       if (!uniqueArr.includes(i)){
        uniqueArr.push(i);
       }
      }
      return uniqueArr;
}

console.log(duplicates([1,2,2,3,4,4,5,65,6,6,6,]));

//7. Find the intersection of Two sorted arrays.

function Intersect(arr1, arr2){
    return arr1.filter(val => arr2.includes(val));
}

console.log(Intersect([1,2,3],[3,4,5]));

//8. Check if string is reverse of another

function isReverse(str1,str2){
    str2 = str2.split('').reverse().join('');
    // split converts string to arr. reverse() works on arr only. and then
    // join() converts the arr back to string
    return str1 === str2;
}

console.log(isReverse("abcde","edcbat"));

//9. Find the Majority element in the array.

function Majority(str) {
    result = {};
    for (let i of str) {
        if (result[i]) {
            result[i]++;
        }
        else {
            result[i] = 1;  // 3 = 1
        };
    }
    let maxCount = 0;
    let majorityElement;
    for (let char in result) {
      if (result[char] > maxCount) {
        maxCount= result[char];
      majorityElement=char;
    }
    }
    return majorityElement;} // 

console.log(Majority([3,3,4,2,3,3,5,5,5,5,5]));


//10. Find the longest common prefix in an array of Strings.

// We first take the whole first word as prefix, then if next word doesnt includes prefix then 
// remove last letter from prefix using slice. To repeat this multiple times for same word use
// while. If there's a single different word the prefix gets cut to empty.

function longestCommonPrefix(strs){
    if (strs.length === 0) return ""; 

    let prefix = strs[0]; 

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) { 
            prefix = prefix.slice(0, prefix.length - 1); 
            if (prefix === "") return ""; 
        }
    }
    return prefix; 
}
console.log(longestCommonPrefix(["Enslave","Ensoure","Enliven", "Encrust"]));

//11. Rotate an Array by K positions
 
function Rotate(arr, k){
    return [...arr.slice(k), ...arr.slice(0,k)];
}
console.log(Rotate([12,3,3,4,634,643,2], 3));


//12. Find missing number in an Unsorted Array (1 to N)

//-> Calculate sum upto n and then subtract from the sum of the given input.
// n will be array length +1 as there is one missing number.

function missing(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const arrSum = arr.reduce((a, b) => a + b, 0);
    return (`Missing number is ${expectedSum - arrSum}`);
  }
  
  console.log(missing([1, 2, 3, 4, 5, 7, 8]));

//13. Find longest substring without Repeating Characters.

// 14. Check if an array is a subsequence of another array.

// 15. Find the Peak element in an array. 

function findPeakElement(arr) {
    if (arr.length === 0) return null; 

    let maxElement = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i]; 
        }
    }

    return maxElement; 
}
console.log(findPeakElement([1,3,20,4,1,0]));

//16. 

//17

//18

//19

//20










