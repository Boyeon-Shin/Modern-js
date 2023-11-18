const arr = [0];
// arr[100]= 100;
// console.log(arr);
// console.log(arr.length);

arr[0] =1;
arr['1'] =2;
arr['foo'] = 4;
arr.bar = 4;
arr[1.1] =5;
arr[-1] = 9;

console.log(arr);
console.log(arr.length);