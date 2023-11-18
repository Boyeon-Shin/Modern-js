const arr = ['hello', 'world'];

arr.flatMap((str, index) => [index, [str, str.length]]);
//  [[0, ['hello', 5]], [1, ['world', 5]]] => [0, ['hello', 5], 1, ['world', 5]]

arr.map((str, index) => [index, [str, str.length]]).flat(2);
// [[0, ['hello', 5]], [1, ['world', 5]]] => [0, 'hello', 5, 1, 'world', 5]



