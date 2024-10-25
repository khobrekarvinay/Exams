








// DATA STRUCTURES & ALGO 


// 1. Reverse a string
//-> Push elements in array in reverse order

function Reverse(str){
    result = [];
    for ( let i = str.length - 1; i >= 0 ; i-- ){
      result.push(str[i]);

    }
 return result;
}

console.log(Reverse("abcdfrg"));

// 2. Check Palindrome 
//-> check first and last elements, then 2nd and 2nd last. If not same then not
// palindrome

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

//5. Check if Prime
//-> Check if remainder is 0 after divinding by numbers upto root n. If true then not prime. 
//-> To type i < root(n) you have to write it this way i*i < num. Same condition. 

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



// 6. Find the second largest element in an Array 
// -> Sort the array in decending and return 2nd element

function second(str){
    let g= str.sort((a,b)=> b-a);
    return (`Second largest element is ${g[1]}`);
}

console.log(second([1,2,3,4,5,6]));

// 7. Check array is sorted or not. 

function checksort(str){
    for ( let i=0; i<str.length -1; i++){
        if ( str[i]> str[i+1]){
            return false;
        }
    }
    return true; 
}

console.log(checksort([1,2,3,4,5,6,7]));

// 7b. Sort in ascending order

function ascend(arr){
    return arr.sort((a,b)=> a-b);

}
console.log(ascend([5,2,8,1,3]));

//7c. Sorting without using sort().




//8. Count vowels in a string 
//-> For loop in string. If vowels are found increase count 

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
//-> Without using Set method. Use includes(). If empty array doesn't include the element 
// then push it. 

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

//10b. Check if two strings are annagrams 
//-> Again use includes. If a single elements is not includes then not annagram.

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


// 11. Find Missing number in array (1 to n)
//-> Calculate sum upto n and then subtract from the sum of the given input.
// n will be array length +1 as there is one missing number.

function missing(arr) {
    const n = arr.length + 1; 
    const expectedSum = (n * (n + 1)) / 2; 
    const arrSum = arr.reduce((a, b) => a + b, 0);
    return (`Missing number is ${expectedSum - arrSum}`);
  }
  
  console.log(missing([1, 2, 3, 4, 5, 7, 8]));

//12. Find intersection of two arrays
//-> Again use includes. If element of arr1 is in arr2 then return. Use filter
// for more simplified code. Filter helps to loop and perform action
// of the elements at the same time

function Intersect(arr1, arr2){
    return arr1.filter(val => arr2.includes(val));
}

console.log(Intersect([1,2,3],[3,4,5]));

//13. 



//14. Rotate an aray by k positions
//-> slice syntax (start, end). slice(k) - cuts the array at the k index, returns all elements after k. 
//-> slice (0,k) - cuts from 0 to k index. Then you join the slice(k) and then slice (0,k) with spread op

function Rotate(arr, k){
    return [...arr.slice(k), ...arr.slice(0,k)];
}
console.log(Rotate([12,3,3,4,634,643,2], 3));



// 15. First Non-Repeating Character
//-> Use object key and values to map frequency.

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

// 15a. Find the freq of element in array.
//-> Use object for mapping

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

// 15b. Find the First Non-Repeating Character:
// Question: Write a JavaScript function to find the first non-repeating character in a string.
// ● Input: "aabbccddeef"
// ○ Output: "f"
// -> Map frequency of each element. Return the char that has value 1.

function NonRepeating(str) {
    result = {};
    for (let i in str) {
        if (result[str[i]]) {
            result[str[i]]++;
        }
        else {
            result[str[i]] = 1;
        };
    }
    for (let char in result) {
        if (result[char]==1){
            return char;
        }
    }
    return 'None';
}

//15c. Find the Majority Element:
// Question: Write a JavaScript function to find the majority element in
// an array.
// ● Input: [5, 5, 5, 5, 1, 2, 3]
// ○ Output: 5
//-> Same object mapping code. Then write maximum value code.

function Majority(str) {
    result = {};
    for (let i in str) {
        if (result[str[i]]) {
            result[str[i]]++;
        }
        else {
            result[str[i]] = 1;  // 3 = 1
        };
    }
    let maxCount = 0;
    let majorityElement;
    for (let char in result) {
      if (result[char] > maxCount) {
        maxCount = result[char];
        majorityElement = char;
      }
    }
    return majorityElement;} // 

//

//16.

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
//-> First 2 numbers must be pushed directly. From 3rd element push sum of previous 2 elements.

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

//19. 


//20. Find the GCD of two number


//21. Implement a Function to Flatten a Nested Array:
// Question: Write a JavaScript function to flatten a deeply nested array.
// Examples:
// ● Input: [1, [2, [3, [4]], 5]]
// ○ Output: [1, 2, 3, 4, 5]
// -> Here recursion is used. If inside the array another array (more than 2 elements) are found. Then
// send the main function again inside till no arrays are found and the loose elements are pushed directly in result

function flattenArray(nestedArray) {
    return nestedArray.reduce((flatArray, currentElement) => {
        if (Array.isArray(currentElement)) {
            return flatArray.concat(flattenArray(currentElement));// [1, [2,3]]
        } else {
            return flatArray.concat([currentElement]);
        }
    }, []);
}

//22. Valid Parentheses
// ● Problem: Given a string containing just the characters (, ), {, }, [ and ], determine if
// the input string is valid. The input string is valid if:
//  Open brackets must be closed by the same type of brackets.
//  Open brackets must be closed in the correct order.

// -> Opening brackets must be pushed in a result array. If closing brackets are found the result array must have
// opening brackets for that closing brackets. We do this by using pop(). Matching opening bracket for a closing bracket is 
// found then directly remove that opening bracket from the result array. Also we need to add the case where we get a closing
// bracket and result has no elements. return false. After the else if cases for all three brackets the result must be empty
// as all closing brackets match with all opening brackets and pop them from result, leaving a clean empty array which is
// needed for validparenthesis to be true. 

function validParenthesis(input) {
    let result = [];
    for (let i of input) {
    if (i === "(" || i === "[" || i === "{") {
        result.push(i);  
        // result=[]

    } else if (i === ")" && ((result.pop() !== "(") || (result.length===0))) {
        return false;
    } else if (i === "]" && ((result.pop() !== "[") || (result.length===0))) {
        return false;
    } else if (i === "}" && ((result.pop() !== "{") || (result.length===0))) {
        return false;
    }
}
return result.length === 0
}


//23. Filtering and Transforming Objects
// You are given an array of objects representing products in a store. Each object has three
// properties: name, category, and price. Write a function called filterAndTransformProducts that
// filters the products by a given category and then returns an array of strings where each string is
// the product's name and price concatenated.

//-> Filter() use to loop and do actions on elements at same time. Filter returns array where the 
// product.category value is same as the value we pass as category in functions. If say we pass Electronics
// then filter() will return an array with all the objects having electronics as their category. Note this is
// a array made of objects. Then after filter() use map() to print product.name & product.price. 
// Return products.filter.map is used to skip all additional steps.

const products = [
    { name: "Laptop", category: "Electronics", price: 1000 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Phone", category: "Electronics", price: 500 },
    { name: "Shoes", category: "Clothing", price: 80 }
  ];
  
  function filterAndTransformProducts(products, category) {
    return products
      .filter(product => product.category === category)
      .map(product => `${product.name}: $${product.price}`);
  }
  
  console.log(filterAndTransformProducts(products, "Electronics"));


//24. Grouping and Summing Properties
// You are given an array of objects representing orders in a restaurant. Each object has three
// properties: orderId, tableNumber, and amount. Write a function called sumByTable that returns
// an object where each key is a tableNumber and the value is the total amount for that table.

//-> Reduce method is just filter() with a additional result array or object or whatever type we set the
//accumulator as.  
const orders = [
    { orderId: 1, tableNumber: 2, amount: 30 },
    { orderId: 2, tableNumber: 1, amount: 20 },
    { orderId: 3, tableNumber: 2, amount: 50 },
    { orderId: 4, tableNumber: 3, amount: 40 },
    { orderId: 5, tableNumber: 1, amount: 10 }
  ];
  
  function sumByTable(orders) {
    return orders.reduce((acc, order) => {
      acc[order.tableNumber] = (acc[order.tableNumber] || 0) + order.amount;
      // This is a shorter way of object mapping we have done before.
      // Here left side is key & right side is value. On first loop order.tableNumber value is none 
      // so the or condition (||) sets the value as 0. Then order.amount is added. So final left side is
      // set to object.value .Then if the same tableNumber comes the previous saved order amount is 
      // added to new one. 
      return acc;
    }, {});
  }
  
  console.log(sumByTable(orders));
  // Output: { 1: 30, 2: 80, 3: 40 }


//25. Nested Objects and Property Counting
// You are given an array of objects representing students. Each object has a name property and a
// subjects property, which is an array of strings representing the subjects the student is enrolled
// in. Write a function called countSubjects that returns an object where each key is a subject and
// the value is the number of students enrolled in that subject.
const students = [
    { name: "Alice", subjects: ["Math", "Science"] },
    { name: "Bob", subjects: ["English", "Math"] },
    { name: "Charlie", subjects: ["Math", "History"] },
    { name: "David", subjects: ["Science", "History"] }
  ];
  
  function countSubjects(students) {
    return students.reduce((acc, student) => {
        // student is the objects inside main array. we use reduce to loop and perform action on elements.
        // plus accumulator. 
      student.subjects.forEach(subject => {
        // We need to perform actions on the subjects which are inside the objects inside the subjects array. 
        // so here we do student.subjects.forEach and give subject to access the subjects inside.
        acc[subject] = (acc[subject] || 0) + 1;
        // Same short method of object mapping. Just byheart it at this point.
      });
      return acc;
    }, {});
  }
  
  console.log(countSubjects(students));
  
  
// Output should be { Math: 3, Science: 2, English: 1, History: 2 }

//26. Object Transformation and Filtering
// You are given an array of objects representing inventory items. Each object has a name,
// quantity, and price. Write a function called inventoryValue that returns the total value of the
// inventory, but only includes items where the quantity is greater than zero.

const inventory = [
    { name: "Laptop", quantity: 5, price: 1000 },
    { name: "Shirt", quantity: 0, price: 50 },
    { name: "Phone", quantity: 10, price: 500 },
    { name: "Shoes", quantity: 3, price: 80 }
  ];
  
  function inventoryValue(inventory) {
    return inventory
      .filter(item => item.quantity > 0)
      // This returns array where quantity is > 0
      .reduce((total, item) => total + (item.quantity * item.price), 0);
      // To calculate total we use the accumulator of reduce(). Total is first set to zero
      // and is added to item.quantity* item.price to calculate total price for each item. Then 
      // with each loop it gets added to the total.
  }
  
  console.log(inventoryValue(inventory));
  // Output: 12600
  
  //27. 

  
  

