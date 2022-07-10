setTimeout(() => {
  console.log(1);
}, 0);

new Promise((res) => {
  console.log(2);
  res();
}).then(() => {
  console.log(3);
});

console.log(4);
