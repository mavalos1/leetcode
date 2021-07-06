// Runtime: 140 ms, faster than 96.69% of TypeScript online submissions for Roman to Integer.
// Memory Usage: 45.9 MB, less than 65.95% of TypeScript online submissions for Roman to Integer.

// Symbol values
const symbols = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1,
};

function romanToInt(s: string): number {
    const sArr = [...s];
    const last = sArr.length - 1;
    let total = symbols[sArr[last]];

    for (let i = last - 1; i >= 0; i--) {
        if (symbols[sArr[i]] < symbols[sArr[i + 1]]) {
            total -= symbols[sArr[i]];
        } else {
            total += symbols[sArr[i]];
        }
    }

    return total;
};
