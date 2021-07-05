// Runtime: 84 ms, faster than 98.41% of TypeScript online submissions for Container With Most Water.
// Memory Usage: 48.6 MB, less than 83.76% of TypeScript online submissions for Container With Most Water.

function maxArea(arr: number[]): number {
    let maxArea = 0;
    let l = 0;
    let r = arr.length - 1;

    // enclosing window with two pointer on both ends
    while (r - l > 0) {
        const width = r - l;
        const height = Math.min(arr[l], arr[r]);
        maxArea = Math.max(maxArea, width * height);

        // move the smaller pointer
        if (arr[l] > arr[r]) r--;
        else if (arr[l] < arr[r]) l++;
        else {
            // move both if equal
            l++;
            r--;
        }
    }

    return maxArea;
};

/*
Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
Example 3:

Input: height = [4,3,2,1,4]
Output: 16
Example 4:

Input: height = [1,2,1]
Output: 2
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
*/