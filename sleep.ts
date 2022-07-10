function sleep(n: number) {
  return new Promise((resolve) => setTimeout(resolve, n));
}

async function delay(fn, n = 0) {
  await sleep(n);
  fn();
}

delay(() => console.log(1));
delay(() => console.log(2), 1000);
