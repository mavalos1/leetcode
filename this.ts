const name = "John";
const obj = {
  name: "Alice",
  prop: {
    name: "Bob",
    getName: function () {
      return this.name;
    },
  },
};

console.log(obj.prop.getName());

const test = obj.prop.getName;

console.log(test());
