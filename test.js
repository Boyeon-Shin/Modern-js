//  //
// const original = [1,2,3,4,5];
// const copy = original.slice();
//
// console.log(original[1] === copy[1]);
//
// //
// var string1 = "hello";
// var string2 = string1;
// console.log(string1, string2);
//
// string1 = "elly"
//
// console.log(string1, string2);
//
// //
// const obj = { a: 1 };
// const newObj = Object.assign({}, obj);
//
// newObj.a = 2;
//
// console.log(obj); // { a: 1 }
// console.log(obj === newObj); // false

// 깊은 복사 예시 1
 const odj = {
     a: 1,
     b :{
         c:2.
     },
 };

 const newObj = JSON.parse(JSON.stringify(obj));

 newObj.b.c =3;

 console.log(obj);
 console.log(obj.b.c === newObj.b.c);
