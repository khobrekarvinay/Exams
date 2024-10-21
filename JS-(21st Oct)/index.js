// Reverse a string


function Reverse(str){
    result = [];
    for ( let i = str.length - 1; i >= 0 ; i-- ){
      result.push(str[i]);

    }
 return result;
}

console.log(Reverse("abcdfrg"));

// 2. Check Palindrome 

function Palindrome(str){
    str= str.toString();
    for (let i=0; i< Math.floor(str.length/2) ; i++ ){
            if (str[i] !== str[str.length -1 -i]){
                 return ("Not palindrome");
            }
        }
            return ("Paindrome");
    
}

console.log(Palindrome(123456));
console.log(Palindrome(12321));

//3. Find maximum in an array

function maximum(arr){
    let max=0;
    for(let i of arr){
        if ( i > max){
         max = i ;
        }
}
return(`Maximum element is ${max}`);
}
console.log(maximum([1,2,3,4,5,6,9]));


//4. Sum of Array Elements 

function Sum(arr){
    return arr.reduce(((total,acc)=> total+ acc), 0 );
}
console.log(Sum([1,4,5,6,7,8,8]));

//5. First Non-Repeating Character

function Character(str){
     result = {};
     for ( i of str){
        if (result[i] == undefined ){
              result[i]= 1;
        }
        else(result[i]++)
     }
     for (let i of str){
     if ( result[i] == 1 ){
        return (`First Non Repeating Character is ${i}`); 
     }
    }
}
console.log(Character([1,2,3,1,2,1,2,1]));

// 6. Find the second largest element in an Array 

function second(str){
    let g= str.sort((a,b)=> b-a);
    return (`Second largest element is ${g[1]}`);
}

console.log(second([1,2,3,4,5,6]));

// 7. Check sorted

function checksort(str){
    for ( let i=0; i<str.length -1; i++){
        if ( str[i]> str[i+1]){
            return false;
        }
    }
    return true; 
}

console.log(checksort([1,2,3,4,5,6,7]));

//8. Count vowels in a string 

function vowels(str){
    count = 0;
    for (let ele of str.toLowerCase()){
        if (ele== 'a' || ele== 'e' || ele=='i' || ele=='o' || ele== 'u'){
            count ++;
        }
    }
    return (`Vowel count ${count}`);
}
console.log(vowels("agbrbtynytneeeeioioioiouu"));

//9. Find the index of a Target in an array. 

function target(arr, targ){
       for ( let i=0; i < arr.length -1; i++ ){
        if (arr[i] == targ){
            return (`index of ${targ} is ${i}`);
        }
       }
       return -1; 
}
console.log(target([1,2,3,4,5,65,6], 65));

//10. Remove duplicates in an array

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

// 11. Find Missing number in array (1 to n)
function missing(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const arrSum = arr.reduce((a, b) => a + b, 0);
    return (`Missing number is ${expectedSum - arrSum}`);
  }
  
  console.log(missing([1, 2, 3, 4, 5, 7, 8]));

//12. Find intersection of two arrays

function Intersect(arr1, arr2){
    return arr1.filter(val => arr2.includes(val));
}

console.log(Intersect([1,2,3],[3,4,5]));

//13. Check if two strings are annagrams 

function areAnnagrams(str1, str2){
       const counter= {};
       for (let char of str1) {
         if (!str2.includes(char)){
            return ("strings are not annagrams");
         }
       }
       return ("strings are annagram")
}
console.log(areAnnagrams("silent", "listen"));

//14. Rotate an aray by k positions

function Rotate(arr, k){
    return [...arr.slice(k), ...arr.slice(0,k)];
}
console.log(Rotate([12,3,3,4,634,643,2], 3));

// 15. Find the freq of element in array.

function Freq(arr){
    result={};  
    for ( let i of arr){
        if (result[i] == undefined){
            result[i]= 1;
        }
        else {
            result[i]++;
        }
    }
    return result;
}
console.log(Freq([1,1,3,52,3,324,234,4,3]));

//16. Check if Prime

function prime(num){
     if (num <=1 ){
        return "not prime";
     }
     for( let i=2; i*i< num; i++){
        if( num % i ===0){
            return ("not prime");
        }
     }
     return ("is prime");
}
console.log(prime(22));

//17. Find the factorial of a number

function Fact(num){
    if (num===0 || num === 1){
        return 1;
    }
    else {
        return num* Fact(num-1);
    }
    
}
console.log(Fact(5));

//18. Find Fibonacci number at postion n

function Fibonacci(n){
    result = [];
    result.push(0);
    result.push(1);
    for( let i=2; i<n; i++){
        result.push(result[i-1]+ result[i-2]);
    }
    return result;
}
console.log(Fibonacci(10));

//19. Sort in ascending order

function ascend(arr){
    return arr.sort((a,b)=> a-b);

}
console.log(ascend([5,2,8,1,3]));

//20. Find the GCD of two numbers 

function 
