
//1 Longest common substring

// const str1 = "abcde";
// const str2 = "bcdef";
// const str3 = "cdefg";

// function findLongestCommonSubstring(str1, str2, str3) {
//     let longestCommon = "";

//     for (let i = 0; i < str1.length; i++) {
//         for (let j = i + 1; j <= str1.length; j++) {
//             const currentSubstring = str1.slice(i, j);

//             if (str2.includes(currentSubstring) &&
//                 str3.includes(currentSubstring) &&
//                 currentSubstring.length > longestCommon.length) {
//                 longestCommon = currentSubstring;
//             }
//         }
//     }

//     return longestCommon;
// }

// const res = findLongestCommonSubstring(str1,str2,str3)
// console.log(res);

//2 find triplets with zero sum

// const nums = [-1,0,1,2,-1,-4]
// const target = 0;
// const res = [];
// for (let i = 0 ; i <= nums.length- 1 ; i++){
//     for (let j = i+1 ; j <= nums.length - 1 ; j++){
//         for (let k = j+1 ; k <= nums.length - 1 ; k++){
//                 if (nums[i]+nums[j] + nums[k] === target) {
//                        res.push([nums[i],nums[j],nums[k]]);
//             }
//         }
//     }
// }

// console.log(res);

//Find All Anagrams in a String 

// const result = [];
// const text = "cbaebabacd";
// const pattern = "abc";
// const pl = pattern.length;
// const tl = text.length;

// const sortedPattern = pattern.split("").sort().join("");

// for (let i = 0; i <= tl - pl; i++) {
//   const substring = text.slice(i, i + pl);
//   if (substring.split("").sort().join("") === sortedPattern) {
//     result.push(i);
//   }
// }

// console.log(result);

//  Merge Intervals
// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];
// if (!intervals.length) return [];

// intervals.sort((a, b) => a[0] - b[0]);

// const merged = [intervals[0]];

// for (let i = 1; i < intervals.length; i++) {
//   const current = merged[merged.length - 1];
//   const interval = intervals[i];

//   if (interval[0] <= current[1]) {
//     current[1] = Math.max(current[1], interval[1]);
//   } else {
//     merged.push(interval);
//   }
// }

// console.log(merged);


 
// function customSort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - 1 - i; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 // Swap
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

 
//  const res = findSmallestRange([4,10,15],[1,3,8],[2,6]);
// console.log(res);

//  3-Sum Closest to Target
//  var nums = [-1,2,1,-4]
//  const target = 1
//     // Sort array
//     nums = customSort(nums);
    
//     let closestSum = nums[0] + nums[1] + nums[2];
//     let closestDiff = Math.abs(closestSum - target);
    
//     for(let i = 0; i < nums.length - 2; i++) {
//         let left = i + 1;
//         let right = nums.length - 1; 
//     // console.log(nums , "nums", closestDiff , "closetdiff" , closestSum , "closetsum"); 
        
//         while(left < right) {
//             let sum = nums[i] + nums[left] + nums[right];
//             let diff = Math.abs(sum - target);
            
//             if(diff < closestDiff) {
//                 closestDiff = diff;
//                 closestSum = sum;
//             }
            
//             if(sum < target) {
//                 left++;
//             } else if(sum > target) {
//                 right--;
//             } else {
//                 return sum;
//             }
//         }
//     }
    
//   console.log(closestSum , "closetsum");
  
//  Word Break Problem
// let s = "leetcode";
// let wordDict = ["leet", "code", "cod"];
// function wordBreak(s, wordDict) {
 
//     function isInDict(str) {
//         for(let i = 0; i < wordDict.length; i++) {
//             if(wordDict[i] === str) return true;
//         }
//         return false;
//     }
    
     
//     for(let i = 1; i < s.length; i++) {
//         let firstPart = s.substring(0, i);
//         let secondPart = s.substring(i);
        
//         if(isInDict(firstPart) && isInDict(secondPart)) {
//             return true;
//         }
//     }
    
//     return false;
// }
// console.log("Word Break Result:", wordBreak(s, wordDict));

// // Largest Rectangle in Histogram
// function largestRectangle(heights1, heights2) {
     
//     let heights = [];
//     for(let i = 0; i < heights1.length; i++) {
//         heights.push(heights1[i]);
//     }
//     for(let i = 0; i < heights2.length; i++) {
//         heights.push(heights2[i]);
//     }
    
//     let maxArea = 0;
//     let maxHeights = [];
   
//     for(let i = 0; i < heights.length; i++) {
//         for(let j = i; j < heights.length; j++) {
           
//             let minHeight = heights[i];
//             for(let k = i; k <= j; k++) {
//                 if(heights[k] < minHeight) {
//                     minHeight = heights[k];
//                 }
//                 console.log(  "heig", heights , "miniheight" , minHeight);
                
//             }
            
           
//             let width = j - i + 1;
//             let area = width * minHeight;
             
//             if(area > maxArea) {
//                 maxArea = area;
//                 maxHeights = [heights[i], heights[j]];
//             }
//         }
//     }
    
//     return {
//         area: maxArea,
//         heights: maxHeights
//     };
// }

//  const res = largestRectangle([2,1,5],[6,2,3])