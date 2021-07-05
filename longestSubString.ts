// Runtime: 124 ms, faster than 62.05% of TypeScript online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 45.4 MB, less than 40.93% of TypeScript online submissions for Longest Substring Without Repeating Characters.

function lengthOfLongestSubstring(s: string): number {
    const map: { [k: string]: number } = {};
    let longest = 0;

    // sliding window boundaries
    let left = 0;
    let right = 0;

    // move right pointer
    for (right = 0; right < s.length; right++) {
        const r = s.charAt(right);

        // move left to closest dupes
        if (!!map[r]) {
            left = Math.max(map[r], left);
        }

        longest = Math.max(longest, right - left + 1);
        map[r] = right + 1;
    }

    return longest;
};

/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.

*/