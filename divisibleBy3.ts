function divisibleByThree(S: string): number {
    const nums = S.split('').map(a => Number.parseInt(a));
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < 10; i++) {
            if ((sum - nums[i] + j) % 3) {
                count += 1;
            }
        }
    }

    return 0;
}