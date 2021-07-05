// N unique, M values
function graphIncreasing(A: number[], B: number[]): boolean {
    const edges: { [key: number]: number[] } = {};
    for (let i = 0; i < A.length; i++) {
        edges[A[i]] = edges[A[i]] || [];
        edges[A[i]].push(B[i]);
    }

    let pathExists = false;
    Object.entries(edges).some(([k, connected]) => {
        if (!connected.includes(Number.parseInt(k) + 1)) {
            pathExists = false;
            return true;
        }
    });

    return pathExists;
}

console.log(graphIncreasing([1,2,4,4,3],[2,3,1,3,1]));