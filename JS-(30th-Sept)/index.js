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

console.log(second([1,2,3,4,5,6,7,8,9]));
