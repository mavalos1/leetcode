function twoSumTwoArray(numsA: number[], numsB: number[], target: number): number[] {
    // a map to store complement: index pair
    const map: { [k: number]: number } = {};

    // iterate through the (shorter) array
    for (let i = 0; i < numsA.length; i++) {
        // store pair
        const a = target - numsA[i];
        map[a] = i;

        // at the same time, check if current index on B matches any complement
        const b = numsB[i];
        if (map[b] !== undefined) {
            return [map[b], i];
        }
    }

    return [-1, -1];
}

const A = [1, 2, 3, 4];
const B = [5, 0, 3, 4];
console.log(twoSumTwoArray(A, B, 2));

const C = [1];
const D = [1];
console.log(twoSumTwoArray(C, D, 2));

const E = [1, 2, 3, 4];
const F = [5, 0, 3, 4];
console.log(twoSumTwoArray(E, F, 22));

const G = [4, 4, 5];
const H = [4, 4, 5];
console.log(twoSumTwoArray(G, H, 8));

const I = [0, 0, 0, 0];
const K = [1, 2, 3, 4];
console.log(twoSumTwoArray(I, K, 2));