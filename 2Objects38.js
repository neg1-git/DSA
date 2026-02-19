const obj = {
  name: "bruce",
  age: 25,
  "sys-age":25
};

obj.age=12
delete obj['sys-age']

console.log(obj);
console.log(obj.name);
console.log(obj["sys-age"]);
