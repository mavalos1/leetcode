function findMostFrequent<T extends string | number>(arr: T[]): T | null {
  const freqMap = {} as Record<T, number>;

  if (arr.length === 0) {
    return null;
  }

  let highestFrequency = 0;
  let mostFrequentElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    freqMap[arr[i]] = (freqMap[arr[i]] ?? 0) + 1;
    if (freqMap[arr[i]] > highestFrequency) {
      highestFrequency = freqMap[arr[i]];
      mostFrequentElement = arr[i];
    }
  }

  return mostFrequentElement;
}

console.log(findMostFrequent([]));
console.log(findMostFrequent([1, 2, 2, 2, 3]));
console.log(findMostFrequent([1, 1, 2, 2, 3]));
