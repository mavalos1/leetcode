/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

*/
function twoSumsBruteForce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
}

// Runtime: 84 ms, faster than 82.34% of TypeScript online submissions for Two Sum.
// Memory Usage: 42.4 MB, less than 10.14% of TypeScript online submissions for Two Sum.
function twoSum(nums: number[], target: number): number[] {
    const map: { [k: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        const a = target - nums[i];
        if (!!map[a] && map[a] !== i) {
            return [i, map[a]];
        }
    }

    return [-1, -1];
};


function twoSumHashMapOnce(nums: number[], target: number): number[] {
    const map: { [k: number]: number } = {};
    for (let i = 0; i < nums.length; i++) {
        const a = target - nums[i];
        if (!!map[a]) {
            return [i, map[a]];
        }
        map[nums[i]] = i;
    }

    return [-1, -1];
}
