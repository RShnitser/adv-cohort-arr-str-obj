/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

function twoSum(nums : number[], target: number): number[]{
    const sumMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        const num2 = target - num;
        const j = sumMap.get(num2);
        if(j !== undefined){
            return [j, i];
        }
        sumMap.set(num, i);
    }
    return [0, 0];
}

console.log("---twoSum---");
console.log(twoSum([2, 7, 11, 15], 5));

/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */

function reverseWords(input : string) : string{
    const words = input.split(" ");
    let i = 0;
    let j = words.length - 1;
    while(i < j){
        [words[i], words[j]] = [words[j], words[i]];
        i++;
        j--;
    }
    return words.join(" ");
}

console.log("---reverseWords---")
console.log(reverseWords("the sky is blue"));

/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

function mostCommonCharacter(input : string): string{
    const letterMap = new Map<string, number>();
    for(const l of input){
        const newVal = (letterMap.get(l) || 0) + 1;
        letterMap.set(l, newVal);
    }
    let maxCount = 0;
    let result = "";
    for(const [k, v] of letterMap.entries()){
        if(v > maxCount){
            maxCount = v;
            result = k;
        }
    }
    return result;
}

console.log("---mostCommonCharacter---");
console.log(mostCommonCharacter("banana"));

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

function findDuplicated(nums : number[]) : number[]{
    const numSet = new Set();
    const result : number[] = [];
    for(const n of nums){
        if(numSet.has(n)){
            result.push(n);
        }
        numSet.add(n);
    }
    return result;
}

console.log("---findDuplicates---");
console.log(findDuplicated([4,3,2,7,8,2,3,1]));

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */



function firstUniqueCharacter(input: string) : number{
    const letterMap = new Map<string, number[]>();
    for(let i = 0; i < input.length; i++){
        const l = input[i];
        const indexCount = letterMap.get(l);
        if(indexCount !== undefined){
            letterMap.set(l, [indexCount[0], indexCount[1] + 1])
        }else{
            letterMap.set(l, [i, 1]);
        }
    }
  
    for(const [index, count] of letterMap.values()){
        if(count === 1){
            return index;
        }
    }
    return -1;
}

console.log("--uniqueCharacter--");
console.log(firstUniqueCharacter("leetcode"));

/*
 * Problem: Find All Duplicates in an Array
 *
 * Given an array, return all duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */
