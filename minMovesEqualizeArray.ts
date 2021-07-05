function minMoves(nums: number[]): number {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        min = Math.min(min, nums[i]);
    }
    
    const count = sum - min * nums.length;
    return count;
};