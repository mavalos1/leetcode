function test() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
    return 2;
  }
}

test();

function test2() {
  console.log(a);
  console.log(foo());

  let a = 1;
  function foo() {
    return 2;
  }
}

test();
