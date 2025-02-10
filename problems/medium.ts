/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */

function mergeOverlappingIntervals(input : number[][]) : number[][]{

    if(input.length <= 1){
        return input;
    }
    const result : number[][] = [];
    result.push(input[0]);
    outer:
    for(let i = 1; i < input.length; i++){
        for(let j = 0; j < result.length; j++){
            const [il, ir] = input[i];
            const [jl, jr] = result[j];
            if(il <= jr){
                result[j][0] = jl;
                result[j][1] = ir;
                continue outer;
            }else if(il >= jl && ir <= jr){
                continue outer;
            }
        }
        result.push(input[i]);
    }
    return result;
}

console.log("--mergeInterval---");
console.log(mergeOverlappingIntervals([[1,3],[2,6],[8,10],[15,18]]));

/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */

function groupAnagrams(input : string[]): string[][]{
    const anagramMap = new Map<string, string[]>();
    
    for(const word of input){
        const anagram = word.split("").sort().join("");
        const group = anagramMap.get(anagram);
        if(group !== undefined){
            group.push(word);
            anagramMap.set(anagram, group);
        }else{
            anagramMap.set(anagram, [word]);
        }
    }

    return Array.from(anagramMap.values());
}

console.log("--groupAnagram--");
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */

function getPalindrome(input : string, start : number): string{
    let result = "";
    
    let l = start;
    let r = start + 1;
    let evenResult = "";
    while(true){
        if(l < 0 || r > input.length - 1){
            break;
        }
        if(input[l] === input[r]){
            evenResult = `${input[l]}${evenResult}${input[r]}`;
            l--;
            r++;
        }else{
            break;
        }
    }
    result = evenResult;
   
    let oddResult = input[start];
    l = start - 1;
    r = start + 1;

    while(true){
        if(l < 0 || r > input.length - 1){
            break;
        }
        if(input[l] === input[r]){
            oddResult = `${input[l]}${oddResult}${input[r]}`;
            l--;
            r++;
        }else{
            break;
        }
    }
    if(oddResult.length > evenResult.length){
        result = oddResult;
    }
    if(result.length === 1){
        return "";
    }
    return result;
}

function findLongestPalindrome(input: string):string{
    let result = "";
    for(let i = 0; i < input.length; i++){
        const palindrome = getPalindrome(input, i);
        if(palindrome.length > result.length){
            result = palindrome;
        }
    }
    return result;
}

console.log("--longestPalindrome---");
console.log(findLongestPalindrome("babad"));

/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */

function flattenObject(input : any): any {
    const result = {};

    for(const [k, v] of Object.entries(input)){
        if(typeof v === "object"){
            const flat = flattenObject(v);
            for(const [kf, vf] of Object.entries(flat)){
                result[kf] = vf;
            }
        }else{
            result[k] = v;
        }
    }
    return result;
}

console.log("---flattenObject---")
console.log(flattenObject({ a: { b: { c: 1 } }, d: 2 }));

/*
 * Problem: Deep Object Comparison
 *
 * Write a function to deeply compare two objects.
 *
 * Example:
 * Input: obj1 = { a: { b: 1 } }, obj2 = { a: { b: 1 } }
 * Output: true
 *
 * Hint: Use recursion and check nested properties.
 */

function compareObject(a : any, b: any): boolean {
    let result = true;
    const entriesA = Object.entries(a);
    const entriesB = Object.entries(b);
    if(entriesA.length !== entriesB.length){
        return false;
    }

    for(let i = 0; i < entriesA.length; i++){
        const [ka, va] = entriesA[i];
        const [kb, vb] = entriesB[i];

        if(ka !== kb){
            return false;
        }

        if(typeof va !== typeof vb){
            return false;
        }

        if(typeof va === "object"){
            if(!compareObject(va, vb)){
                return false;
            }
           
        }
        else if(va !== vb){
            return false;
        }
    }

   
    return result;
}

console.log("---compareObject---");
console.log(compareObject({ a: { b: 1 } }, { a: { b: 1 } }));

/*
 * Problem: Maximum Subarray Sum
 *
 * Find the contiguous subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */

function maxSubarray(nums : number[]): number{
    let largestSum = Number.NEGATIVE_INFINITY;
  
    for(let subLength = 0; subLength < nums.length; subLength++){
        for(let start = 0;  start < nums.length; start++){
            let currSum = 0;
            for(let i = 0; i <= subLength && start + subLength < nums.length; i++){
                currSum += nums[start + i];
            }
            if(currSum > largestSum){
                largestSum = currSum;
            }
        }
    }

    return largestSum;
}

console.log("---maxSubArray---");
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]));
