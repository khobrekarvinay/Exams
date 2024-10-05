// Find the second largest element in an array
// Output: Second largest number


function second(arr){
    var first= arr[0];
    var second= -Infinity; 

   for(let i of arr){
      if(i > first){
        second=first;
        first=i;
      }
      else if (i<first && i>second){
      second=i;
   }

}
return second;
};

// console.log(second([1,2,3,4,5,6,7,8,9]));


//Q4. Find the missing number in a sorted array. 
// Input: A sorted list of numbes with a single mussing number.
// Ouput: The missing number. 


function missing(arr, n){

      
   var result= (n*(n+1))/2; // 
   var res = arr.reduce((total, num)=> total + num, 0);   
   return result - res ;   
}
console.log(missing([1,2,3,4,5,7,8], 8 ));
console.log(missing([1,2,3,4,5,6], 7 ));

//Q8. Find the first non-repeating character in a string 
// Input: A string 
// Output: The first non-repeating character, or "No non repeating character detected"
// if none exists.
//Eg. input: aabbcde Output: c
//Eg. input: aabcdefa Output: No non repeating character
//Eg. input: abcdefgh Output: a

function firstNonRepeatingChar(str) {
   const charCount = {};
 
   // Count character occurrences
   for (let char of str) {
     charCount[char] = (charCount[char] || 0) + 1;
   }
 
   // Find the first non-repeating character
   for (let char of str) {
     if (charCount[char] === 1) {
       return char;
     }
   }
 
   return "No non-repeating character detected";
 }


 //Q9. Merge Intervals
 //Input: A list of intervals represented as pairs of numbers separated by spaces.
 //Output: A list of merged intervals, also represented as pairs of numbers separated by spaces

 