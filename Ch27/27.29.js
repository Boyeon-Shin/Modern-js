const arr = Array.from({length:3});
console.log(arr);

const arr2 = Array.from({length: 3},(v, i) => i );
const arr3 = Array.from({length: 3},(v, i) => i +7 );
console.log(arr2);
console.log(arr3);
