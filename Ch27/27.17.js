const sparse = [, 2, , 4];
console.log(sparse.length);
console.log(sparse);

console.log(Object.getOwnPropertyDescriptors(sparse));

var fruits = ["Apple", "Banana", "Orange", "Mango"];
var new_fruit = "Melon";
fruits.splice(2, 0, new_fruit);
console.log( fruits );