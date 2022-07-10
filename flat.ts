function flat<T>(arr: T[]) {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return [...acc, ...curr];
    }

    return [...acc, curr];
  }, []);
}

console.log([1, 2, 3, 4].reduce((prev, curr) => prev + curr));

console.log(flat([]));
console.log(
  flat([
    [1, 2, 3],
    [2, 3, 4],
  ])
);
console.log(flat([[], [1, 2, 3]]));
console.log(flat([1, [1, 2, 3]]));
console.log(flat([1, [[0, 1], 2, 3]]));
