function unique<T>(arr: T[]): T[] {
  const valueMap: Record<string, boolean> = {};

  return arr.filter((value) => {
    const key = value.toString();
    if (!!valueMap[key]) {
      return false;
    }

    valueMap[key] = true;
    return true;
  });
}

console.log(unique([]));
console.log(unique([1, 2, 3, 2, 3, 4]));
console.log(unique([1, 1, 1, 1, 1, 1]));
console.log(unique([1, 2, 3, 4, 5, 6]));
