// Runtime: 144 ms, faster than 92.86% of TypeScript online submissions for Integer to Roman.
// Memory Usage: 48.1 MB, less than 19.64% of TypeScript online submissions for Integer to Roman.

// Symbol values
const symbols = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1,
};

function intToRoman(num: number): string {
    let s = '';
    Object.entries(symbols).every(([k, val]) => {
        if (num <= 0) return false;
        while (val <= num) {
            num -= val;
            s = s.concat(k);
        }

        return true;
    })

    return s;
}
