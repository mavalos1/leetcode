const memoMap: Record<string, any> = {};

function impureAdd2(num: number): number {
  console.log("compute...");
  return num + 2;
}

function memo(fn: (...args: any[]) => any) {
  let memoCache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (memoCache[key] !== undefined) {
      return memoCache[key];
    } else {
      const result = fn(args);
      memoCache[key] = result;

      return result;
    }
  };
}

const memoizedAdd2 = memo(impureAdd2);
console.log(memoizedAdd2(9));
console.log(memoizedAdd2(9));
